"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wss = exports.app = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const debug_1 = __importDefault(require("debug"));
const middlewares_1 = require("./middlewares");
const routes_1 = __importDefault(require("./routes"));
const port_1 = require("./helpers/port");
const server_callbacks_1 = require("./helpers/server-callbacks");
const register_1 = require("./routes/api/register");
const websocket_1 = require("./websocket");
const PORT = port_1.normalizePort(process.env.PORT || '6595');
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
exports.app.set('port', PORT);
/* === Server port === */
if (process.env.NODE_ENV !== 'test') {
    server.listen(PORT);
}
websocket_1.registerWebsocket(exports.wss);
/* === Server callbacks === */
server.on('upgrade', (request, socket, head) => {
    exports.wss.handleUpgrade(request, socket, head, socket => {
        exports.wss.emit('connection', socket, request);
    });
});
server.on('error', server_callbacks_1.getErrorCb(PORT));
server.on('listening', server_callbacks_1.getListeningCb(server, debug));
