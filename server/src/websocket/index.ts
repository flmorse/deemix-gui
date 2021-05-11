import { Server as WsServer } from 'ws'
import { consoleError, consoleInfo } from '../helpers/errors'
import wsModules from './modules'

// ? Is this needed?
// ? https://github.com/websockets/ws#how-to-detect-and-close-broken-connections

export const registerWebsocket = (wss: WsServer) => {
	wss.on('connection', ws => {
		wsModules.forEach(module => {
			ws.on(module.eventName, module.cb)
		})
	})

	wss.on('error', () => {
		consoleError('An error occurred to the WebSocket server.')
	})

	wss.on('close', () => {
		consoleInfo('Connection to the WebSocket server closed.')
	})
}
