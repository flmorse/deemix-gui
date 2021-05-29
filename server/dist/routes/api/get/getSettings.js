"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/getSettings';
const handler = (_, res) => {
    res.send(main_1.getSettings());
};
const apiHandler = { path, handler };
exports.default = apiHandler;
