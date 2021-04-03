"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = void 0;
/**
 * Normalize a port into a number, string, or false.
 *
 * @since	0.0.0
 */
function normalizePort(portString) {
    const port = parseInt(portString, 10);
    if (isNaN(port)) {
        // named pipe
        return portString;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
