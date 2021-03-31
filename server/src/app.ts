import path from 'path'

import http from 'http'
import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import debug0 from 'debug'
import indexRouter from './routes'
import usersRouter from './routes/users'

const ROOT_DIR = path.resolve('../')

const app: Application = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(ROOT_DIR, 'webui', 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

/**
 * Module dependencies.
 */

const debug = debug0('deemix-gui:server')
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val:string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  const addr = server.address()

  if (addr) {
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
    debug('Listening on ' + bind)
  }
}
