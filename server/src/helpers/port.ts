/**
 * Normalize a port into a number, string, or false.
 */

export function normalizePort (portString:string) {
  const port = parseInt(portString, 10)

  if (isNaN(port)) {
    // named pipe
    return portString
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}
