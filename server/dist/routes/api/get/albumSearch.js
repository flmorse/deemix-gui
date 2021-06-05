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
const path = '/album-search/';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    if (!req.query) {
        return res.status(400).send();
    }
    const { term, start, nb, ack } = parseQuery(req.query);
    if (!term || term.trim() === '') {
        return res.status(400).send();
    }
    const albums = yield dz.api.search_album(term, { start, nb });
    const output = {
        data: albums,
        total: albums.data.length,
        ack
    };
    return res.send(output);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
function parseQuery(query) {
    let startingPoint = 0;
    if (typeof query.start !== 'undefined') {
        startingPoint = parseInt(query.start);
    }
    let newNb = 30;
    if (typeof query.nb !== 'undefined') {
        newNb = parseInt(query.nb);
    }
    return {
        term: query.term,
        start: startingPoint,
        nb: newNb,
        ack: query.ack
    };
}
// function getAlbums(term: string, start: number, nb: number): any[] {
// 	return []
// }
