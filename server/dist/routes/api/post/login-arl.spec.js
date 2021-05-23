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
const utils_1 = require("../../../../tests/utils");
describe('login-arl requests', () => {
    it('should respond 200 to calls with arl', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseStatusCollector = [];
        const batchCalls = ['/api/login-arl/?arl=abcdef1234'];
        for (const uri of batchCalls) {
            responseStatusCollector.push((yield utils_1.appSendPost(uri)).status);
        }
        expect(responseStatusCollector).toMatchObject(new Array(batchCalls.length).fill(200));
        expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(200));
    }));
    it('should respond 400 to calls without arl', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseStatusCollector = [];
        const batchCalls = ['/api/login-arl/', '/api/login-arl/?dummy=test', '/api/login-arl/?email=aaa@aa.com'];
        for (const uri of batchCalls) {
            responseStatusCollector.push((yield utils_1.appSendPost(uri)).status);
        }
        expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(400));
    }));
    it('should login using ARL', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield utils_1.appSendPost(`/api/login-arl/?arl=${process.env.DEEZER_ARL}`);
        expect(response.status).toBe(200);
        expect(response.body).toBe(true);
    }));
    it('should not login using wrong ARL', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield utils_1.appSendPost(`/api/login-arl/?arl=abcdef1234`);
        expect(response.status).toBe(200);
        expect(response.body).toBe(false);
    }));
});
