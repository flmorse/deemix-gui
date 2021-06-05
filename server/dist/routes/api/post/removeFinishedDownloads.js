"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/removeFinishedDownloads';
const handler = (_, res) => {
    main_1.clearCompletedDownloads();
    res.send({ result: true });
};
const apiHandler = { path, handler };
exports.default = apiHandler;
