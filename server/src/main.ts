import fs from 'fs'
import { sep } from 'path'
import { v4 as uuidv4 } from 'uuid'
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

export let queueOrder: string[] = []
export const queue: any = {}
export let currentJob: any = null

restoreQueueFromDisk()

export async function addToQueue(dz: any, url: string[], bitrate: number) {
	if (!dz.logged_in) throw new NotLoggedIn()

	let downloadObjs: any[] = []
	let link: string = ""
	const requestUUID = uuidv4()

	if (url.length > 1){
		listener.send("startGeneratingItems", {uuid: requestUUID, total: url.length})
	}

	for (let i = 0; i < url.length; i++){
		link = url[i]
		console.log(`Adding ${link} to queue`)
		let downloadObj = await deemix.generateDownloadObject(dz, link, bitrate, deemixPlugins, listener)
		if (Array.isArray(downloadObj)){
			downloadObjs.concat(downloadObj)
		} else {
			downloadObjs.push(downloadObj)
		}
	}

	if (url.length > 1){
		listener.send("finishGeneratingItems", {uuid: requestUUID, total: downloadObjs.length})
	}

	const isSingleObject = downloadObjs.length == 1
	const slimmedObjects: any[] = []

	downloadObjs.forEach((downloadObj: any) => {
		// Check if element is already in queue
		if (Object.keys(queue).includes(downloadObj.uuid))
			throw new AlreadyInQueue(downloadObj.getEssentialDict(), !isSingleObject)

		// Save queue status when adding something to the queue
		if (!fs.existsSync(configFolder + 'queue')) fs.mkdirSync(configFolder + 'queue')

		queueOrder.push(downloadObj.uuid)
		fs.writeFileSync(configFolder + `queue${sep}order.json`, JSON.stringify(queueOrder))
		queue[downloadObj.uuid] = downloadObj.getEssentialDict()
		queue[downloadObj.uuid].status = 'inQueue'

		const savedObject = downloadObj.toDict()
		savedObject.status = 'inQueue'
		fs.writeFileSync(configFolder + `queue${sep}${downloadObj.uuid}.json`, JSON.stringify(savedObject))

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

		const currentUUID: string = queueOrder.shift() || ''
		console.log(currentUUID)
		queue[currentUUID].status = 'downloading'
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

		if (!downloadObject.isCanceled) {
			// Set status
			if (downloadObject.failed == downloadObject.size) {
				queue[currentUUID].status = 'failed'
			} else if (downloadObject.failed > 0) {
				queue[currentUUID].status = 'withErrors'
			} else {
				queue[currentUUID].status = 'completed'
			}

			const savedObject = downloadObject.getSlimmedDict()
			savedObject.status = queue[currentUUID].status

			// Save queue status
			fs.writeFileSync(configFolder + `queue${sep}${currentUUID}.json`, JSON.stringify(savedObject))
		}
		console.log(queueOrder)
		fs.writeFileSync(configFolder + `queue${sep}order.json`, JSON.stringify(queueOrder))

		currentJob = null
	} while (queueOrder.length)
}

export function cancelDownload(uuid: string) {
	if (Object.keys(queue).includes(uuid)) {
		switch (queue[uuid].status) {
			case 'downloading':
				currentJob.downloadObject.isCanceled = true
				listener.send('cancellingCurrentItem', uuid)
				break
			case 'inQueue':
				queueOrder.splice(queueOrder.indexOf(uuid), 1)
				fs.writeFileSync(configFolder + `queue${sep}order.json`, JSON.stringify(queueOrder))
			// break
			default:
				// This gets called even in the 'inQueue' case. Is this the expected behaviour? If no, de-comment the break
				listener.send('removedFromQueue', uuid)
				break
		}
		fs.unlinkSync(configFolder + `queue${sep}${uuid}.json`)
		delete queue[uuid]
	}
}

export function cancelAllDownloads() {
	queueOrder = []
	let currentItem: string | null = null
	Object.values(queue).forEach((downloadObject: any) => {
		if (downloadObject.status == 'downloading') {
			currentJob.downloadObject.isCanceled = true
			listener.send('cancellingCurrentItem', downloadObject.uuid)
			currentItem = downloadObject.uuid
		}
		fs.unlinkSync(configFolder + `queue${sep}${downloadObject.uuid}.json`)
		delete queue[downloadObject.uuid]
	})
	fs.writeFileSync(configFolder + `queue${sep}order.json`, JSON.stringify(queueOrder))
	listener.send('removedAllDownloads', currentItem)
}

export function clearCompletedDownloads() {
	Object.values(queue).forEach((downloadObject: any) => {
		if (downloadObject.status === 'completed') {
			fs.unlinkSync(configFolder + `queue${sep}${downloadObject.uuid}.json`)
			delete queue[downloadObject.uuid]
		}
	})
	listener.send('removedFinishedDownloads')
}

export function restoreQueueFromDisk() {
	if (!fs.existsSync(configFolder + 'queue')) fs.mkdirSync(configFolder + 'queue')
	const allItems: string[] = fs.readdirSync(configFolder + 'queue')
	allItems.forEach((filename: string) => {
		if (filename == 'order.json') {
			queueOrder = JSON.parse(fs.readFileSync(configFolder + `queue${sep}order.json`).toString())
		} else {
			const currentItem: any = JSON.parse(fs.readFileSync(configFolder + `queue${sep}${filename}`).toString())
			if (currentItem.status === 'inQueue') {
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
						break
				}
				queue[downloadObject.uuid] = downloadObject.getEssentialDict()
				queue[downloadObject.uuid].status = 'inQueue'
			} else {
				queue[currentItem.uuid] = currentItem
			}
		}
	})
}
