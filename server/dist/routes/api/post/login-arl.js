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
const LoginStatus = {
    NOT_AVAILABLE: -1,
    FAILED: 0,
    SUCCESS: 1,
    ALREADY_LOGGED: 2,
    FORCED_SUCCESS: 3
};
const path = '/login-arl';
const handler = (req, res, _) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    if (!req.query) {
        return res.status(400).send();
    }
    if (!req.query.arl) {
        return res.status(400).send();
    }
    const loginParams = [req.query.arl];
    // TODO Handle the child === 0 case, don't want to rely on the login_via_arl default param (it may change in the
    //  future)
    if (req.query.child) {
        loginParams.push(req.query.child);
    }
    let response;
    if (process.env.NODE_ENV !== 'test') {
        if (!dz.logged_in) {
            response = yield dz.login_via_arl(...loginParams);
            response = response ? 1 : 0;
        }
        else {
            response = LoginStatus.ALREADY_LOGGED;
        }
    }
    else {
        const testDz = new deezer_js_1.Deezer();
        response = yield testDz.login_via_arl(...loginParams);
    }
    if (!(yield main_1.isDeezerAvailable()))
        response = LoginStatus.NOT_AVAILABLE;
    const returnValue = { status: response, arl: req.query.arl, user: dz.current_user };
    main_1.startQueue(dz);
    return res.status(200).send(returnValue);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
