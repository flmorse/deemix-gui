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
const primitive_checks_1 = require("../../../helpers/primitive-checks");
const errors_1 = require("../../../helpers/errors");
const path = '/getChartTracks';
const handler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!main_1.sessionDZ[req.session.id])
            main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
        const dz = main_1.sessionDZ[req.session.id];
        if (primitive_checks_1.isObjectEmpy(req.query) || !req.query.id) {
            throw new errors_1.BadRequestError();
        }
        const playlistId = req.query.id;
        const index = req.query.index;
        const limit = req.query.limit;
        const response = yield dz.api.get_playlist_tracks(playlistId, { index, limit });
        res.status(200).send(response);
        next();
    }
    catch (error) {
        if (errors_1.isBadRequestError(error)) {
            errors_1.consoleError(error.message);
            res.status(400).send();
            return next();
        }
    }
});
const apiHandler = { path, handler };
exports.default = apiHandler;
