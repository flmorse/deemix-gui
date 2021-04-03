"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListeningCb = exports.getErrorCb = void 0;
/**
 * Event listener for HTTP server "error" event.
 *
 * @since	0.0.0
 */
function getErrorCb(port) {
    return (error) => {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES': {
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
            }
            case 'EADDRINUSE': {
                console.error(bind + ' is already in use');
                process.exit(1);
            }
            default:
                throw error;
        }
    };
}
exports.getErrorCb = getErrorCb;
/**
 * Event listener for HTTP server "listening" event.
 *
 * @since	0.0.0
 */
function getListeningCb(server, debug) {
    return () => {
        const addr = server.address();
        if (addr) {
            const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
            debug('Listening on ' + bind);
        }
    };
}
exports.getListeningCb = getListeningCb;
