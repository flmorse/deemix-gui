"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../helpers/errors");
const main_1 = require("../../main");
const eventName = 'removeFinishedDownloads';
const cb = (_, __, ___) => {
    main_1.clearCompletedDownloads();
    errors_1.consoleInfo('Completed downloads cleared');
};
exports.default = { eventName, cb };
