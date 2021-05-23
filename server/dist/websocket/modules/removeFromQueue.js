"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../helpers/errors");
const main_1 = require("../../main");
const eventName = 'removeFromQueue';
const cb = (data, __, ___) => {
    main_1.cancelDownload(data);
    errors_1.consoleInfo(`Cancelled ${data}`);
};
exports.default = { eventName, cb };
