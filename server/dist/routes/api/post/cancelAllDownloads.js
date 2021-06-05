"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/cancelAllDownloads';
const handler = (_, res) => {
    main_1.cancelAllDownloads();
    res.send({ result: true });
};
const apiHandler = { path, handler };
exports.default = apiHandler;
