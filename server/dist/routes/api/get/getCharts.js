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
const path = '/getCharts';
let chartsCache;
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!chartsCache) {
        if (!main_1.sessionDZ[req.session.id])
            main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
        const dz = main_1.sessionDZ[req.session.id];
        const chartsData = yield dz.api.get_countries_charts();
        const countries = [];
        chartsData.forEach((country) => {
            countries.push({
                title: country.title.replace('Top ', ''),
                id: country.id,
                picture_small: country.picture_small,
                picture_medium: country.picture_medium,
                picture_big: country.picture_big
            });
        });
        chartsCache = { data: countries };
    }
    res.send(chartsCache);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
