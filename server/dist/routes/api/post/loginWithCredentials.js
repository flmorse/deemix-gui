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
const main_1 = require("../../../main");
const path = '/loginWithCredentials';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    let accessToken = req.body.accessToken;
    if (!accessToken) {
        const accessToken = yield main_1.getAccessToken(username, password);
        console.log({ accessToken });
    }
    let arl;
    if (accessToken)
        arl = main_1.getArlFromAccessToken(accessToken);
    res.send({ accessToken, arl });
});
const apiHandler = { path, handler };
exports.default = apiHandler;
