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
const express_1 = __importDefault(require("express"));
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../main");
const router = express_1.default.Router();
let update = null;
/**
 * GET home page
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
    res.render('index', { title: 'deemix' });
});
router.get('/connect', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    if (!update) {
        update = {
            currentCommit: 'testing',
            latestCommit: 'testing',
            updateAvailable: false,
            deemixVersion: main_1.deemixVersion
        };
    }
    const result = {
        update,
        autologin: !dz.logged_in,
        currentUser: dz.current_user,
        deezerAvailable: yield main_1.isDeezerAvailable()
    };
    const queue = main_1.getQueue();
    if (Object.keys(queue.queue).length > 0) {
        result.queue = queue;
    }
    res.send(result);
}));
exports.default = router;
