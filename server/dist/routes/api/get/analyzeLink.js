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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error
const deemix_1 = __importDefault(require("deemix"));
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../../../main");
const path = '/analyzeLink';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query || !req.query.term) {
            return res.status(400).send({ errorMessage: 'No term specified', errorCode: 'AL01' });
        }
        const { term: linkToAnalyze } = req.query;
        const [, linkType, linkId] = yield deemix_1.default.parseLink(linkToAnalyze);
        const isTrackOrAlbum = ['track', 'album'].includes(linkType);
        if (isTrackOrAlbum) {
            if (!main_1.sessionDZ[req.session.id])
                main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
            const dz = main_1.sessionDZ[req.session.id];
            const apiMethod = linkType === 'track' ? 'get_track' : 'get_album';
            const resBody = yield dz.api[apiMethod](linkId);
            return res.status(200).send(resBody);
        }
        return res.status(400).send({ errorMessage: 'Not supported', errorCode: 'AL02' });
    }
    catch (error) {
        return res
            .status(500)
            .send({ errorMessage: 'The server had a problem. Please try again', errorObject: error, errorCode: 'AL03' });
    }
});
const apiHandler = { path, handler };
exports.default = apiHandler;
