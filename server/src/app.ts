import http from 'http'
import express, { Application } from 'express'
import initDebug from 'debug'

import { registerMiddlewares } from './middlewares'

import indexRouter from './routes'
import usersRouter from './routes/users'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'
import { registerApis } from './routes/api/register'

const PORT = normalizePort(process.env.PORT || '6595')

const debug = initDebug('deemix-gui:server')
const app: Application = express()
const server = http.createServer(app)

/* === Middlewares === */
registerMiddlewares(app)

/* === Routes === */
app.use('/', indexRouter)
app.use('/users', usersRouter)

/* === APIs === */
registerApis(app)

/* === Config === */
app.set('port', PORT)

/* === Server port === */
server.listen(PORT)

/* === Server callbacks === */
server.on('error', getErrorCb(PORT))
server.on('listening', getListeningCb(server, debug))
