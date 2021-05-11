import http from 'http'
import express, { Application } from 'express'
import { Server as WsServer } from 'ws'
import initDebug from 'debug'

import { registerMiddlewares } from './middlewares'

import indexRouter from './routes'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'
import { registerApis } from './routes/api/register'
import { registerWebsocket } from './websocket'

const PORT = normalizePort(process.env.PORT || '6595')

const debug = initDebug('deemix-gui:server')
export const app: Application = express()
export const wss = new WsServer({ noServer: true })
const server = http.createServer(app)

/* === Middlewares === */
registerMiddlewares(app)

/* === Routes === */
app.use('/', indexRouter)

/* === APIs === */
registerApis(app)

/* === Config === */
app.set('port', PORT)

/* === Server port === */
if (process.env.NODE_ENV !== 'test') {
	server.listen(PORT)
}

registerWebsocket(wss)

/* === Server callbacks === */
server.on('upgrade', (request, socket, head) => {
	wss.handleUpgrade(request, socket, head, socket => {
		wss.emit('connection', socket, request)
	})
})
server.on('error', getErrorCb(PORT))
server.on('listening', getListeningCb(server, debug))
