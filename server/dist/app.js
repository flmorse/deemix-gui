"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.wss = exports.app = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const yargs_1 = __importDefault(require("yargs"));
const debug_1 = __importDefault(require("debug"));
const helpers_1 = require("yargs/helpers");
const middlewares_1 = require("./middlewares");
const routes_1 = __importDefault(require("./routes"));
const port_1 = require("./helpers/port");
const server_callbacks_1 = require("./helpers/server-callbacks");
const register_1 = require("./routes/api/register");
const websocket_1 = require("./websocket");
const errors_1 = require("./helpers/errors");
// TODO: Remove type assertion while keeping correct types
const argv = yargs_1.default(helpers_1.hideBin(process.argv)).options({
    port: { type: 'string', default: '6595' },
    host: { type: 'string', default: 'localhost' }
}).argv;
const DEEMIX_PORT = port_1.normalizePort((_a = process.env.PORT) !== null && _a !== void 0 ? _a : argv.port);
const DEEMIX_HOST = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : argv.host;
const debug = debug_1.default('deemix-gui:server');
exports.app = express_1.default();
exports.wss = new ws_1.Server({ noServer: true });
const server = http_1.default.createServer(exports.app);
/* === Middlewares === */
middlewares_1.registerMiddlewares(exports.app);
/* === Routes === */
exports.app.use('/', routes_1.default);
/* === APIs === */
register_1.registerApis(exports.app);
/* === Config === */
exports.app.set('port', DEEMIX_PORT);
/* === Server port === */
if (process.env.NODE_ENV !== 'test') {
    server.listen({ port: DEEMIX_PORT, host: DEEMIX_HOST });
}
websocket_1.registerWebsocket(exports.wss);
/* === Server callbacks === */
exports.app.on('mount', a => {
    console.log(a);
});
server.on('connect', () => {
    errors_1.consoleInfo('Server connected');
});
server.on('upgrade', (request, socket, head) => {
    exports.wss.handleUpgrade(request, socket, head, socket => {
        exports.wss.emit('connection', socket, request);
    });
});
server.on('error', server_callbacks_1.getErrorCb(DEEMIX_PORT));
server.on('listening', server_callbacks_1.getListeningCb(server, debug));
