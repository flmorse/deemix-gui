"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../helpers/errors");
const main_1 = require("../../main");
const eventName = 'cancelAllDownloads';
const cb = (_, __, ___) => {
    main_1.cancelAllDownloads();
    errors_1.consoleInfo(`Queue cleared`);
};
exports.default = { eventName, cb };
