import http from 'http'
import express, { Application } from 'express'
import { Server as WsServer } from 'ws'
import yargs from 'yargs'
import initDebug from 'debug'
import { hideBin } from 'yargs/helpers'

import { registerMiddlewares } from './middlewares'

import indexRouter from './routes'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'
import { registerApis } from './routes/api/register'
import { registerWebsocket } from './websocket'
import type { Arguments } from './types'
import { consoleInfo } from './helpers/errors'

export { getSettings } from './main'

// TODO: Remove type assertion while keeping correct types
const argv = yargs(hideBin(process.argv)).options({
	port: { type: 'string', default: '6595' },
	host: { type: 'string', default: '127.0.0.1' }
}).argv as Arguments

const DEEMIX_SERVER_PORT = normalizePort(process.env.DEEMIX_SERVER_PORT ?? argv.port)
const DEEMIX_HOST = process.env.DEEMIX_HOST ?? argv.host

const debug = initDebug('deemix-gui:server')
export const wss = new WsServer({ noServer: true })
export const app: Application = express()
const server = http.createServer(app)

/* === Middlewares === */
registerMiddlewares(app)

/* === Routes === */
app.use('/', indexRouter)

/* === APIs === */
registerApis(app)

/* === Config === */
app.set('port', DEEMIX_SERVER_PORT)

/* === Server port === */
if (process.env.NODE_ENV !== 'test') {
	server.listen({ port: DEEMIX_SERVER_PORT, host: DEEMIX_HOST })
}

registerWebsocket(wss)

/* === Server callbacks === */
app.on('mount', a => {
	console.log(a)
})
server.on('connect', () => {
	consoleInfo('Server connected')
})
server.on('upgrade', (request, socket, head) => {
	wss.handleUpgrade(request, socket, head, socket => {
		wss.emit('connection', socket, request)
	})
})
server.on('error', getErrorCb(DEEMIX_SERVER_PORT))
server.on('listening', getListeningCb(server, debug))
