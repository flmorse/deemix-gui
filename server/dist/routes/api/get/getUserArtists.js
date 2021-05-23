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
const path = '/getUserArtists';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    let data;
    if (dz.logged_in) {
        const userID = dz.current_user.id;
        try {
            data = yield dz.api.get_user_artists(userID, { limit: -1 });
            data = data.data;
        }
        catch (_a) {
            data = yield dz.gw.get_user_artists(userID, { limit: -1 });
        }
    }
    else {
        data = { error: 'notLoggedIn' };
    }
    res.send(data);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
