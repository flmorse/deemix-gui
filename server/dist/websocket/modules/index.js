"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const saveSettings_1 = __importDefault(require("./saveSettings"));
const removeFinishedDownloads_1 = __importDefault(require("./removeFinishedDownloads"));
const removeFromQueue_1 = __importDefault(require("./removeFromQueue"));
const cancelAllDownloads_1 = __importDefault(require("./cancelAllDownloads"));
exports.default = [saveSettings_1.default, removeFinishedDownloads_1.default, removeFromQueue_1.default, cancelAllDownloads_1.default];
