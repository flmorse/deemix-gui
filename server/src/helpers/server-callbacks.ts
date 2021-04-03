import http from 'http'
import type { Debugger } from 'debug'

/**
 * Event listener for HTTP server "error" event.
 */
export function getErrorCb (port: number | string | boolean) {
  return (error: any) => {
    if (error.syscall !== 'listen') {
      throw error
    }

    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES': {
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      }
      case 'EADDRINUSE': {
        console.error(bind + ' is already in use')
        process.exit(1)
      }
      default:
        throw error
    }
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
export function getListeningCb (server: http.Server, debug: Debugger) {
  return () => {
    const addr = server.address()

    if (addr) {
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      debug('Listening on ' + bind)
    }
  }
}
