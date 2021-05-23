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
describe('albumSearch requests', () => {
    it('should respond 200 to calls with term', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseStatusCollector = [];
        const batchCalls = [
            '/api/album-search/?term=eminem',
            '/api/album-search/?term=eminem?start=10',
            '/api/album-search/?term=eminem?ack=aa',
            '/api/album-search/?term=eminem?ack=aa?start=10',
            '/api/album-search/?term=eminem?ack=aa?start=10?nb=34'
        ];
        for (const uri of batchCalls) {
            responseStatusCollector.push((yield utils_1.appSendGet(uri)).status);
        }
        expect(responseStatusCollector).toMatchObject(new Array(batchCalls.length).fill(200));
        expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(200));
    }));
    it('should respond 400 to calls without term', () => __awaiter(void 0, void 0, void 0, function* () {
        const responseStatusCollector = [];
        const batchCalls = [
            '/api/album-search/',
            '/api/album-search/?start=10',
            '/api/album-search/?ack=aa',
            '/api/album-search/?ack=aa?start=10',
            '/api/album-search/?ack=aa?start=10?nb=34'
        ];
        for (const uri of batchCalls) {
            responseStatusCollector.push((yield utils_1.appSendGet(uri)).status);
        }
        expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(400));
    }));
    it('should respond the desired search result', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = (yield utils_1.appSendGet('/api/album-search/?term=eminem')).body;
        expect(res.data.data.length).not.toBe(0);
    }));
    // TODO Understand whic should be the correct response
    it.skip('should respond the desired search result with a start parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = (yield utils_1.appSendGet('/api/album-search/?term=eminem?start=10')).body;
        expect(res.data.data.length).not.toBe(0);
    }));
});
