"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * GET users listing.
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
    res.send('respond with a resource');
});
exports.default = router;
