"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_arl_1 = __importDefault(require("./login-arl"));
const addToQueue_1 = __importDefault(require("./addToQueue"));
const loginWithCredentials_1 = __importDefault(require("./loginWithCredentials"));
const cancelAllDownloads_1 = __importDefault(require("./cancelAllDownloads"));
const removeFinishedDownloads_1 = __importDefault(require("./removeFinishedDownloads"));
const removeFromQueue_1 = __importDefault(require("./removeFromQueue"));
const logout_1 = __importDefault(require("./logout"));
const saveSettings_1 = __importDefault(require("./saveSettings"));
exports.default = [
    login_arl_1.default,
    addToQueue_1.default,
    loginWithCredentials_1.default,
    cancelAllDownloads_1.default,
    removeFinishedDownloads_1.default,
    removeFromQueue_1.default,
    logout_1.default,
    saveSettings_1.default
];
