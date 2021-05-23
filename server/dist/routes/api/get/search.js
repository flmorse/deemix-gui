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
const path = '/search';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    const term = String(req.query.term);
    const type = String(req.query.type);
    const start = parseInt(String(req.query.start));
    const nb = parseInt(String(req.query.nb));
    let data;
    switch (type) {
        case 'track':
            data = yield dz.api.search_track(term, { limit: nb, index: start });
            break;
        case 'album':
            data = yield dz.api.search_album(term, { limit: nb, index: start });
            break;
        case 'artist':
            data = yield dz.api.search_artist(term, { limit: nb, index: start });
            break;
        case 'playlist':
            data = yield dz.api.search_playlist(term, { limit: nb, index: start });
            break;
        case 'radio':
            data = yield dz.api.search_radio(term, { limit: nb, index: start });
            break;
        case 'user':
            data = yield dz.api.search_user(term, { limit: nb, index: start });
            break;
        default:
            data = yield dz.api.search(term, { limit: nb, index: start });
            break;
    }
    data.type = type;
    res.send(data);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
