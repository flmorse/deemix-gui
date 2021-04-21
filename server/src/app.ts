import http from 'http'
import express, { Application } from 'express'
import {Server as wsServer }  from 'ws'
import initDebug from 'debug'

import { registerMiddlewares } from './middlewares'

import indexRouter from './routes'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'
import { registerApis } from './routes/api/register'

const PORT = normalizePort(process.env.PORT || '6595')

const debug = initDebug('deemix-gui:server')
const app: Application = express()
const ws = new wsServer({ noServer: true })
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
server.listen(PORT)

/* === Server callbacks === */
server.on('upgrade', (request, socket, head) => {
  ws.handleUpgrade(request, socket, head, socket => {
    ws.emit('connection', socket, request)
  })
})
server.on('error', getErrorCb(PORT))
server.on('listening', getListeningCb(server, debug))
