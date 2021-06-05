"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const path = '/saveSettings';
const handler = (req, res) => {
    const { settings, spotifySettings } = req.query;
    main_1.saveSettings(settings, spotifySettings);
    main_1.listener.send('updateSettings', { settings, spotifySettings });
    res.send({ result: true });
};
const apiHandler = { path, handler };
exports.default = apiHandler;
