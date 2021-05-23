"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/getQueue';
// let homeCache: any
const handler = (_, res) => {
    const result = {
        queue: main_1.queue,
        order: main_1.queueOrder
    };
    if (main_1.currentJob)
        result.currentItem = main_1.currentJob.downloadObject.getSlimmedDict();
    res.send(result);
};
const apiHandler = { path, handler };
exports.default = apiHandler;
