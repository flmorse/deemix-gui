import { Server as WsServer } from 'ws'

import { consoleError, consoleInfo } from '../helpers/errors'
import wsModules from './modules'

// ? Is this needed?
// ? https://github.com/websockets/ws#how-to-detect-and-close-broken-connections

export const registerWebsocket = (wss: WsServer) => {
	wss.on('connection', ws => {
		ws.on('message', message => {
			consoleInfo(`Received: ${message}`)

			const data = JSON.parse(message.toString())

			wsModules.forEach(module => {
				if (data.key === module.eventName) {
					module.cb(data.data, ws, wss)
				}
			})
		})
	})

	wss.on('error', () => {
		consoleError('An error occurred to the WebSocket server.')
	})

	wss.on('close', () => {
		consoleInfo('Connection to the WebSocket server closed.')
	})
}
