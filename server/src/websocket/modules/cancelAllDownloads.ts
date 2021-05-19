import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { cancelAllDownloads } from '../../main'

const eventName = 'cancelAllDownloads'

const cb = (_: any, __: any, ___: WsServer) => {
	cancelAllDownloads()
	consoleInfo(`Queue cleared`)
}

export default { eventName, cb }
