"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const analyzeLink_1 = __importDefault(require("./analyzeLink"));
const changeAccount_1 = __importDefault(require("./changeAccount"));
const getHome_1 = __importDefault(require("./getHome"));
const getCharts_1 = __importDefault(require("./getCharts"));
const mainSearch_1 = __importDefault(require("./mainSearch"));
const search_1 = __importDefault(require("./search"));
const getTracklist_1 = __importDefault(require("./getTracklist"));
const albumSearch_1 = __importDefault(require("./albumSearch"));
const getChartTracks_1 = __importDefault(require("./getChartTracks"));
const getSettings_1 = __importDefault(require("./getSettings"));
const getUserTracks_1 = __importDefault(require("./getUserTracks"));
const getUserAlbums_1 = __importDefault(require("./getUserAlbums"));
const getUserArtists_1 = __importDefault(require("./getUserArtists"));
const getUserPlaylists_1 = __importDefault(require("./getUserPlaylists"));
const getUserSpotifyPlaylists_1 = __importDefault(require("./getUserSpotifyPlaylists"));
const getUserFavorites_1 = __importDefault(require("./getUserFavorites"));
const getQueue_1 = __importDefault(require("./getQueue"));
exports.default = [
    albumSearch_1.default,
    changeAccount_1.default,
    analyzeLink_1.default,
    getHome_1.default,
    getCharts_1.default,
    getChartTracks_1.default,
    mainSearch_1.default,
    search_1.default,
    getTracklist_1.default,
    getSettings_1.default,
    getUserTracks_1.default,
    getUserAlbums_1.default,
    getUserArtists_1.default,
    getUserPlaylists_1.default,
    getUserSpotifyPlaylists_1.default,
    getUserFavorites_1.default,
    getQueue_1.default
];
