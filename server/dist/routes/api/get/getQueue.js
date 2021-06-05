"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/getQueue';
// let homeCache: any
const handler = (_, res) => {
    const result = main_1.getQueue();
    res.send(result);
};
const apiHandler = { path, handler };
exports.default = apiHandler;
