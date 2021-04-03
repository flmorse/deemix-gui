"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBUI_DIR = exports.ROOT_DIR = void 0;
const path_1 = __importDefault(require("path"));
exports.ROOT_DIR = path_1.default.resolve('../');
exports.WEBUI_DIR = path_1.default.join(exports.ROOT_DIR, 'webui', 'public');
