"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerApis = void 0;
const get_1 = __importDefault(require("./get"));
const delete_1 = __importDefault(require("./delete"));
const post_1 = __importDefault(require("./post"));
const patch_1 = __importDefault(require("./patch"));
const prependApiPath = (path) => `/api${path}`;
const methods = [
    {
        method: 'get',
        endpoints: get_1.default
    },
    {
        method: 'delete',
        endpoints: delete_1.default
    },
    {
        method: 'post',
        endpoints: post_1.default
    },
    {
        method: 'patch',
        endpoints: patch_1.default
    }
];
function registerApis(app) {
    methods.forEach(({ method, endpoints }) => {
        endpoints.forEach(endpoint => {
            // @ts-ignore
            app[method](prependApiPath(endpoint.path), endpoint.handler);
        });
    });
}
exports.registerApis = registerApis;
