import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { clearCompletedDownloads } from '../../main'

const eventName = 'removeFinishedDownloads'

const cb = (_: any, __: any, ___: WsServer) => {
	clearCompletedDownloads()
	consoleInfo('Completed downloads cleared')
}

export default { eventName, cb }
