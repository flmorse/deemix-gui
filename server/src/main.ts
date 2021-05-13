// @ts-expect-error
import deemix from 'deemix'
import fs from 'fs'
import {sep} from 'path'
import { wss } from './app'
import WebSocket from 'ws'

const Downloader = deemix.downloader.Downloader
const { Single, Collection, Convertable } = deemix.types.downloadObjects
export const defaultSettings: any = deemix.settings.DEFAULTS
export const configFolder: string = deemix.utils.localpaths.getConfigFolder()
export let settings: any = deemix.settings.load(configFolder)
export let sessionDZ: any = {}

let deemixPlugins = {}

export const listener = {
  send: function(key:string, data:any){
    console.log(key, data)
    wss.clients.forEach(client => {
  		if (client.readyState === WebSocket.OPEN) {
  			client.send(JSON.stringify({key, data}))
  		}
  	})
  }
}

export function saveSettings(newSettings: any) {
  deemix.settings.save(newSettings, configFolder)
  settings = newSettings
}

export let queueOrder: string[] = []
export let queue: any = {}
export let currentJob: any = null

export async function addToQueue(dz: any, url: string, bitrate: number){
  if (!dz.logged_in) throw new NotLoggedIn
  console.log(`Adding ${url} to queue`)
  let downloadObj = await deemix.generateDownloadObject(dz, url, bitrate, deemixPlugins, listener)

  // Check if element is already in queue
  if (queueOrder.includes(downloadObj.uuid))
    throw new AlreadyInQueue(downloadObj.getEssentialDict())

  // Save queue status when adding something to the queue
  if (!fs.existsSync(configFolder+'queue')) fs.mkdirSync(configFolder+'queue')

  queueOrder.push(downloadObj.uuid)
  fs.writeFileSync(configFolder+`queue${sep}order.json`, JSON.stringify(queueOrder))
  queue[downloadObj.uuid] = downloadObj.getEssentialDict()
  fs.writeFileSync(configFolder+`queue${sep}${downloadObj.uuid}.json`, JSON.stringify(downloadObj.toDict()))
  listener.send('addedToQueue', downloadObj.getSlimmedDict())

  startQueue(dz)
  return queue[downloadObj.uuid]
}

async function startQueue(dz: any): Promise<any>{
  do {
    if (currentJob !== null || queueOrder.length === 0){
      // Should not start another download
      return null
    }
    currentJob = true // lock currentJob

    let currentUUID: string | undefined = queueOrder.shift()
    let currentItem: any = JSON.parse(fs.readFileSync(configFolder+`queue${sep}${currentUUID}.json`).toString())
    let downloadObject: any
    switch (currentItem.__type__) {
      case 'Single':
        downloadObject = new Single(currentItem)
        break;
      case 'Collection':
        downloadObject = new Collection(currentItem)
        break;
      case 'Convertable':
        downloadObject = new Convertable(currentItem)
        // Convert object here
        break;
    }
    currentJob = new Downloader(dz, downloadObject, settings, listener)
    listener.send('startDownload', currentUUID)
    await currentJob.start()
    currentJob = null
  } while (queueOrder.length)
}

class QueueError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "QueueError"
  }
}

class AlreadyInQueue extends QueueError {
  item: any
  constructor(dwObj: any) {
    super(`${dwObj.artist} - ${dwObj.title} is already in queue.`)
    this.name = "AlreadyInQueue"
    this.item = dwObj
  }
}

class NotLoggedIn extends QueueError {
  constructor() {
    super(`You must be logged in to start a download.`)
    this.name = "NotLoggedIn"
  }
}
