"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../helpers/errors");
const main_1 = require("../../main");
const eventName = 'saveSettings';
const cb = (data, _, __) => {
    const { settings, spotifySettings } = data;
    main_1.saveSettings(settings);
    errors_1.consoleInfo('Settings saved');
    main_1.listener.send('updateSettings', { settings, spotifySettings });
};
exports.default = { eventName, cb };
