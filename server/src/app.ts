import http from 'http'

import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import initDebug from 'debug'

import indexRouter from './routes'
import usersRouter from './routes/users'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'
import { WEBUI_DIR } from './helpers/paths'

const PORT = normalizePort(process.env.PORT || '6595')

const debug = initDebug('deemix-gui:server')
const app: Application = express()
const server = http.createServer(app)

/* === Middlewares === */
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(WEBUI_DIR))

/* === Routes === */
app.use('/', indexRouter)
app.use('/users', usersRouter)

/* === Other === */
app.set('port', PORT)

/* === Server port === */
server.listen(PORT)

/* === Server callbacks === */
server.on('error', getErrorCb(PORT))
server.on('listening', getListeningCb(server, debug))
