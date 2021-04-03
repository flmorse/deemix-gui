"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = '/sample';
const handler = (_, res) => {
    res.send('Mandi');
};
const apiHandler = { path, handler };
exports.default = apiHandler;
