"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWebsocket = void 0;
const errors_1 = require("../helpers/errors");
const modules_1 = __importDefault(require("./modules"));
// ? Is this needed?
// ? https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
const registerWebsocket = (wss) => {
    wss.on('connection', ws => {
        ws.on('message', message => {
            errors_1.consoleInfo(`Received: ${message}`);
            const data = JSON.parse(message.toString());
            modules_1.default.forEach(module => {
                if (data.key === module.eventName) {
                    module.cb(data.data, ws, wss);
                }
            });
        });
    });
    wss.on('error', () => {
        errors_1.consoleError('An error occurred to the WebSocket server.');
    });
    wss.on('close', () => {
        errors_1.consoleInfo('Connection to the WebSocket server closed.');
    });
};
exports.registerWebsocket = registerWebsocket;
