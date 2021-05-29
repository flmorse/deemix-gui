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
const path = '/mainSearch';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    const term = String(req.query.term);
    const results = yield dz.gw.search(term);
    const order = [];
    results.ORDER.forEach((element) => {
        if (['TOP_RESULT', 'TRACK', 'ALBUM', 'ARTIST', 'PLAYLIST'].includes(element))
            order.push(element);
    });
    if (results.TOP_RESULT && results.TOP_RESULT.length) {
        const originalTopResult = results.TOP_RESULT[0];
        const topResult = {
            type: originalTopResult.__TYPE__
        };
        switch (topResult.type) {
            case 'artist':
                topResult.id = originalTopResult.ART_ID;
                topResult.picture = `https://e-cdns-images.dzcdn.net/images/artist/${originalTopResult.ART_PICTURE}`;
                topResult.title = originalTopResult.ART_NAME;
                topResult.nb_fan = originalTopResult.NB_FAN;
                break;
            case 'album':
                topResult.id = originalTopResult.ALB_ID;
                topResult.picture = `https://e-cdns-images.dzcdn.net/images/cover/${originalTopResult.ALB_PICTURE}`;
                topResult.title = originalTopResult.ALB_TITLE;
                topResult.artist = originalTopResult.ART_NAME;
                topResult.nb_song = originalTopResult.NUMBER_TRACK;
                break;
            case 'playlist':
                topResult.id = originalTopResult.PLAYLIST_ID;
                topResult.picture = `https://e-cdns-images.dzcdn.net/images/${originalTopResult.PICTURE_TYPE}/${originalTopResult.PLAYLIST_PICTURE}`;
                topResult.title = originalTopResult.TITLE;
                topResult.artist = originalTopResult.PARENT_USERNAME;
                topResult.nb_song = originalTopResult.NB_SONG;
                break;
            default:
                topResult.id = '0';
                topResult.picture = 'https://e-cdns-images.dzcdn.net/images/cover';
                break;
        }
        topResult.picture += '/156x156-000000-80-0-0.jpg';
        topResult.link = `https://deezer.com/${topResult.type}/${topResult.id}`;
        results.TOP_RESULT = [topResult];
    }
    results.ORDER = order;
    res.send(results);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
