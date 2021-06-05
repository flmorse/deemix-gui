"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/removeFromQueue';
const handler = (req, res) => {
    const { uuid } = req.query;
    if (uuid) {
        main_1.cancelDownload(uuid);
        res.send({ result: true });
    }
    else {
        res.send({ result: false });
    }
};
const apiHandler = { path, handler };
exports.default = apiHandler;
