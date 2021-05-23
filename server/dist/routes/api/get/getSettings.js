"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/getSettings';
const handler = (_, res) => {
    res.send({ settings: main_1.settings, defaultSettings: main_1.defaultSettings });
};
const apiHandler = { path, handler };
exports.default = apiHandler;
