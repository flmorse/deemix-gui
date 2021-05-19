import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { cancelDownload } from '../../main'

const eventName = 'removeFromQueue'

const cb = (data: any, __: any, ___: WsServer) => {
	cancelDownload(data)
	consoleInfo(`Cancelled ${data}`)
}

export default { eventName, cb }
