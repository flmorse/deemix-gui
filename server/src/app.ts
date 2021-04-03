import path from 'path'
import http from 'http'

import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import initDebug from 'debug'

import indexRouter from './routes'
import usersRouter from './routes/users'

import { normalizePort } from './helpers/port'
import { getErrorCb, getListeningCb } from './helpers/server-callbacks'

const ROOT_DIR = path.resolve('../')
const PORT = normalizePort(process.env.PORT || '6595')
const debug = initDebug('deemix-gui:server')
const app: Application = express()
const server = http.createServer(app)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(ROOT_DIR, 'webui', 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.set('port', PORT)

server.listen(PORT)
server.on('error', getErrorCb(PORT))
server.on('listening', getListeningCb(server, debug))
