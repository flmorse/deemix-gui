"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const paths_1 = require("./helpers/paths");
function registerMiddlewares(app) {
    if (process.env.NODE_ENV !== 'test') {
        app.use(morgan_1.default('dev'));
    }
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(cookie_parser_1.default());
    app.use(express_session_1.default({
        secret: 'U2hoLCBpdHMgYSBzZWNyZXQh',
        resave: true,
        saveUninitialized: true
    }));
    app.use(express_1.default.static(paths_1.WEBUI_DIR));
}
exports.registerMiddlewares = registerMiddlewares;
