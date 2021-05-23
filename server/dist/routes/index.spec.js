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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
describe('root path requests', () => {
    it('responds 200 to the GET method', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(app_1.app).get('/').send();
        expect(result.status).toBe(200);
    }));
    it('responds 404 to the POST method', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(app_1.app).post('/').send();
        expect(result.status).toBe(404);
    }));
    it('responds 404 to the PATCH method', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(app_1.app).patch('/').send();
        expect(result.status).toBe(404);
    }));
    it('responds 404 to the DELETE method', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(app_1.app).delete('/').send();
        expect(result.status).toBe(404);
    }));
    it('redirects to root when a non existing server route is requested', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(app_1.app).get('/settings').send();
        expect(result.header.location).toBe('/');
        expect(result.status).toBe(302);
    }));
});
