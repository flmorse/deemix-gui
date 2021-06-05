"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-expect-error
const deezer_js_1 = require("deezer-js");
const main_1 = require("../main");
const router = express_1.default.Router();
/**
 * GET home page
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
    res.render('index', { title: 'deemix' });
});
router.get('/connect', (req, res) => {
    if (!main_1.sessionDZ[req.session.id])
        main_1.sessionDZ[req.session.id] = new deezer_js_1.Deezer();
    const dz = main_1.sessionDZ[req.session.id];
    const result = {
        update: {
            currentCommit: 'testing',
            latestCommit: 'testing',
            updateAvailable: false,
            deemixVersion: '3.0_beta'
        },
        autologin: !dz.logged_in,
        currentUser: dz.current_user,
        deezerNotAvailable: false
    };
    const queue = main_1.getQueue();
    if (Object.keys(queue.queue).length > 0) {
        result.queue = queue;
    }
    res.send(result);
});
exports.default = router;
