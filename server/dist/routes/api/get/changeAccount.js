"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../../../main");
const path = '/changeAccount';
const handler = (req, res) => {
    if (!req.query || !req.query.child) {
        return res.status(400).send({ errorMessage: 'No child specified', errorCode: 'CA01' });
    }
    const { child: accountNum } = req.query;
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    const accountData = dz.change_account(accountNum);
    return res.status(200).send(accountData);
};
const apiHandler = { path, handler };
exports.default = apiHandler;
