"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const debug_1 = __importDefault(require("debug"));
const middlewares_1 = require("./middlewares");
const routes_1 = __importDefault(require("./routes"));
const users_1 = __importDefault(require("./routes/users"));
const port_1 = require("./helpers/port");
const server_callbacks_1 = require("./helpers/server-callbacks");
const register_1 = require("./routes/api/register");
const PORT = port_1.normalizePort(process.env.PORT || '6595');
const debug = debug_1.default('deemix-gui:server');
const app = express_1.default();
const server = http_1.default.createServer(app);
/* === Middlewares === */
middlewares_1.registerMiddlewares(app);
/* === Routes === */
app.use('/', routes_1.default);
app.use('/users', users_1.default);
/* === APIs === */
register_1.registerApis(app);
/* === Config === */
app.set('port', PORT);
/* === Server port === */
server.listen(PORT);
/* === Server callbacks === */
server.on('error', server_callbacks_1.getErrorCb(PORT));
server.on('listening', server_callbacks_1.getListeningCb(server, debug));
