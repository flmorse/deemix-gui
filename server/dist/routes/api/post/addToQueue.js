"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../../../main");
const path = '/addToQueue';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    const url = req.query.url.split(';');
    let bitrate = req.query.bitrate;
    if (bitrate === 'null')
        bitrate = main_1.getSettings().settings.maxBitrate;
    let obj;
    try {
        obj = yield main_1.addToQueue(dz, url, bitrate);
    }
    catch (e) {
        switch (e.name) {
            case 'NotLoggedIn':
                res.send({ result: false, errid: e.name, data: { url, bitrate } });
                main_1.listener.send('loginNeededToDownload');
                break;
            default:
                console.error(e);
                res.send({ result: false, errid: e.name, data: { url, bitrate } });
                break;
        }
        return;
    }
    res.send({ result: true, data: { url, bitrate, obj } });
});
const apiHandler = { path, handler };
exports.default = apiHandler;
