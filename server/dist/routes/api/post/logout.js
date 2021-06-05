"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../../../main");
const path = '/logout';
const handler = (req, res) => {
    main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    res.send({ logged_out: true });
};
const apiHandler = { path, handler };
exports.default = apiHandler;
