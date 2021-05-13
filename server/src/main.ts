import fs from 'fs'
import { sep } from 'path'
// @ts-expect-error
import deemix from 'deemix'
import WebSocket from 'ws'
import { wss } from './app'
import { Settings } from './types'
import { AlreadyInQueue, NotLoggedIn } from './helpers/errors'

const Downloader = deemix.downloader.Downloader
const { Single, Collection, Convertable } = deemix.types.downloadObjects
export const defaultSettings: Settings = deemix.settings.DEFAULTS
export const configFolder: string = deemix.utils.localpaths.getConfigFolder()
export let settings: any = deemix.settings.load(configFolder)
export const sessionDZ: any = {}

const deemixPlugins = {}

export const listener = {
	send(key: string, data?: any) {
		console.log(key, data)
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify({ key, data }))
			}
		})
	}
}

export function saveSettings(newSettings: any) {
	deemix.settings.save(newSettings, configFolder)
	settings = newSettings
}

export const queueOrder: string[] = []
export const queue: any = {}
let currentJob: any = null

export async function addToQueue(dz: any, url: string, bitrate: number) {
	if (!dz.logged_in) throw new NotLoggedIn()
	console.log(`Adding ${url} to queue`)
	let downloadObjs = await deemix.generateDownloadObject(dz, url, bitrate, deemixPlugins, listener)
	console.log({ downloadObjs })
	const isSingleObject = !Array.isArray(downloadObjs)
	console.log(downloadObjs)

	if (isSingleObject) downloadObjs = [downloadObjs]

	const slimmedObjects: any[] = []

	downloadObjs.forEach((downloadObj: any) => {
		// Check if element is already in queue
		if (queueOrder.includes(downloadObj.uuid)) throw new AlreadyInQueue(downloadObj.getEssentialDict(), !isSingleObject)

		// Save queue status when adding something to the queue
		if (!fs.existsSync(configFolder + 'queue')) fs.mkdirSync(configFolder + 'queue')

		queueOrder.push(downloadObj.uuid)
		fs.writeFileSync(configFolder + `queue${sep}order.json`, JSON.stringify(queueOrder))
		queue[downloadObj.uuid] = downloadObj.getEssentialDict()
		fs.writeFileSync(configFolder + `queue${sep}${downloadObj.uuid}.json`, JSON.stringify(downloadObj.toDict()))
		slimmedObjects.push(downloadObj.getSlimmedDict())
	})
	if (isSingleObject) listener.send('addedToQueue', downloadObjs[0].getSlimmedDict())
	else listener.send('addedToQueue', slimmedObjects)

	startQueue(dz)
	return slimmedObjects
}

async function startQueue(dz: any): Promise<any> {
	do {
		if (currentJob !== null || queueOrder.length === 0) {
			// Should not start another download
			return null
		}
		currentJob = true // lock currentJob

		const currentUUID: string | undefined = queueOrder.shift()
		const currentItem: any = JSON.parse(fs.readFileSync(configFolder + `queue${sep}${currentUUID}.json`).toString())
		let downloadObject: any
		switch (currentItem.__type__) {
			case 'Single':
				downloadObject = new Single(currentItem)
				break
			case 'Collection':
				downloadObject = new Collection(currentItem)
				break
			case 'Convertable':
				downloadObject = new Convertable(currentItem)
				// Convert object here
				break
		}
		currentJob = new Downloader(dz, downloadObject, settings, listener)
		listener.send('startDownload', currentUUID)
		await currentJob.start()
		currentJob = null
	} while (queueOrder.length)
}
