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
const main_1 = require("../../../main");
const path = '/getUserSpotifyPlaylists';
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data;
    if (main_1.plugins.spotify.enabled) {
        const sp = main_1.plugins.spotify.sp;
        const username = req.query.spotifyUser;
        data = [];
        let playlists = yield sp.getUserPlaylists(username);
        let playlistList = playlists.body.items;
        while (playlists.next) {
            const regExec = /offset=(\d+)&limit=(\d+)/g.exec(playlists.next);
            const offset = regExec[1];
            const limit = regExec[2];
            const newPlaylists = yield sp.getUserPlaylists(username, { offset, limit });
            playlists = newPlaylists.body;
            playlistList = playlistList.concat(playlists.items);
        }
        playlistList.forEach((playlist) => {
            data.push(main_1.plugins.spotify._convertPlaylistStructure(playlist));
        });
    }
    else {
        data = { error: 'spotifyNotEnabled' };
    }
    res.send(data);
});
const apiHandler = { path, handler };
exports.default = apiHandler;
