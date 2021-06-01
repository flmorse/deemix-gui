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
exports.restoreQueueFromDisk = exports.clearCompletedDownloads = exports.cancelAllDownloads = exports.cancelDownload = exports.startQueue = exports.addToQueue = exports.currentJob = exports.queue = exports.queueOrder = exports.saveSettings = exports.getSettings = exports.listener = exports.plugins = exports.getArlFromAccessToken = exports.getAccessToken = exports.sessionDZ = exports.settings = exports.configFolder = exports.defaultSettings = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const uuid_1 = require("uuid");
// @ts-expect-error
const deemix_1 = __importDefault(require("deemix"));
const ws_1 = __importDefault(require("ws"));
const app_1 = require("./app");
const errors_1 = require("./helpers/errors");
const Downloader = deemix_1.default.downloader.Downloader;
const { Single, Collection, Convertable } = deemix_1.default.types.downloadObjects;
exports.defaultSettings = deemix_1.default.settings.DEFAULTS;
exports.configFolder = deemix_1.default.utils.localpaths.getConfigFolder();
exports.settings = deemix_1.default.settings.load(exports.configFolder);
exports.sessionDZ = {};
exports.getAccessToken = deemix_1.default.utils.deezer.getAccessToken;
exports.getArlFromAccessToken = deemix_1.default.utils.deezer.getArlFromAccessToken;
exports.plugins = {
    spotify: new deemix_1.default.plugins.spotify()
};
exports.plugins.spotify.setup();
exports.listener = {
    send(key, data) {
        if (data)
            console.log(key, data);
        else
            console.log(key);
        if (["downloadInfo", "downloadWarn"].includes(key))
            return;
        app_1.wss.clients.forEach(client => {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(JSON.stringify({ key, data }));
            }
        });
    }
};
function getSettings() {
    return { settings: exports.settings, defaultSettings: exports.defaultSettings, spotifySettings: exports.plugins.spotify.getCredentials() };
}
exports.getSettings = getSettings;
function saveSettings(newSettings, newSpotifySettings) {
    deemix_1.default.settings.save(newSettings, exports.configFolder);
    exports.settings = newSettings;
    exports.plugins.spotify.setCredentials(newSpotifySettings);
}
exports.saveSettings = saveSettings;
exports.queueOrder = [];
exports.queue = {};
exports.currentJob = null;
restoreQueueFromDisk();
function addToQueue(dz, url, bitrate) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dz.logged_in)
            throw new errors_1.NotLoggedIn();
        let downloadObjs = [];
        let link = "";
        const requestUUID = uuid_1.v4();
        if (url.length > 1) {
            exports.listener.send("startGeneratingItems", { uuid: requestUUID, total: url.length });
        }
        for (let i = 0; i < url.length; i++) {
            link = url[i];
            console.log(`Adding ${link} to queue`);
            let downloadObj = yield deemix_1.default.generateDownloadObject(dz, link, bitrate, exports.plugins, exports.listener);
            if (Array.isArray(downloadObj)) {
                downloadObjs = downloadObjs.concat(downloadObj);
            }
            else {
                downloadObjs.push(downloadObj);
            }
        }
        if (url.length > 1) {
            exports.listener.send("finishGeneratingItems", { uuid: requestUUID, total: downloadObjs.length });
        }
        const slimmedObjects = [];
        downloadObjs.forEach((downloadObj, pos) => {
            // Check if element is already in queue
            if (Object.keys(exports.queue).includes(downloadObj.uuid)) {
                exports.listener.send('alreadyInQueue', downloadObj.getEssentialDict());
                delete downloadObjs[pos];
                return;
            }
            // Save queue status when adding something to the queue
            if (!fs_1.default.existsSync(exports.configFolder + 'queue'))
                fs_1.default.mkdirSync(exports.configFolder + 'queue');
            exports.queueOrder.push(downloadObj.uuid);
            fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}order.json`, JSON.stringify(exports.queueOrder));
            exports.queue[downloadObj.uuid] = downloadObj.getEssentialDict();
            exports.queue[downloadObj.uuid].status = 'inQueue';
            const savedObject = downloadObj.toDict();
            savedObject.status = 'inQueue';
            fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}${downloadObj.uuid}.json`, JSON.stringify(savedObject));
            slimmedObjects.push(downloadObj.getSlimmedDict());
        });
        const isSingleObject = downloadObjs.length == 1;
        if (isSingleObject)
            exports.listener.send('addedToQueue', downloadObjs[0].getSlimmedDict());
        else
            exports.listener.send('addedToQueue', slimmedObjects);
        startQueue(dz);
        return slimmedObjects;
    });
}
exports.addToQueue = addToQueue;
function startQueue(dz) {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            if (exports.currentJob !== null || exports.queueOrder.length === 0) {
                // Should not start another download
                return null;
            }
            exports.currentJob = true; // lock currentJob
            const currentUUID = exports.queueOrder.shift() || '';
            console.log(currentUUID);
            exports.queue[currentUUID].status = 'downloading';
            const currentItem = JSON.parse(fs_1.default.readFileSync(exports.configFolder + `queue${path_1.sep}${currentUUID}.json`).toString());
            let downloadObject;
            switch (currentItem.__type__) {
                case 'Single':
                    downloadObject = new Single(currentItem);
                    break;
                case 'Collection':
                    downloadObject = new Collection(currentItem);
                    break;
                case 'Convertable':
                    downloadObject = new Convertable(currentItem);
                    downloadObject = yield exports.plugins[downloadObject.plugin].convert(dz, downloadObject, exports.settings, exports.listener);
                    fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}${downloadObject.uuid}.json`, JSON.stringify(Object.assign(Object.assign({}, downloadObject.toDict()), { status: 'inQueue' })));
                    break;
            }
            exports.currentJob = new Downloader(dz, downloadObject, exports.settings, exports.listener);
            exports.listener.send('startDownload', currentUUID);
            yield exports.currentJob.start();
            if (!downloadObject.isCanceled) {
                // Set status
                if (downloadObject.failed == downloadObject.size) {
                    exports.queue[currentUUID].status = 'failed';
                }
                else if (downloadObject.failed > 0) {
                    exports.queue[currentUUID].status = 'withErrors';
                }
                else {
                    exports.queue[currentUUID].status = 'completed';
                }
                const savedObject = downloadObject.getSlimmedDict();
                savedObject.status = exports.queue[currentUUID].status;
                // Save queue status
                exports.queue[currentUUID] = savedObject;
                fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}${currentUUID}.json`, JSON.stringify(savedObject));
            }
            console.log(exports.queueOrder);
            fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}order.json`, JSON.stringify(exports.queueOrder));
            exports.currentJob = null;
        } while (exports.queueOrder.length);
    });
}
exports.startQueue = startQueue;
function cancelDownload(uuid) {
    if (Object.keys(exports.queue).includes(uuid)) {
        switch (exports.queue[uuid].status) {
            case 'downloading':
                exports.currentJob.downloadObject.isCanceled = true;
                exports.listener.send('cancellingCurrentItem', uuid);
                break;
            case 'inQueue':
                exports.queueOrder.splice(exports.queueOrder.indexOf(uuid), 1);
                fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}order.json`, JSON.stringify(exports.queueOrder));
            // break
            default:
                // This gets called even in the 'inQueue' case. Is this the expected behaviour? If no, de-comment the break
                exports.listener.send('removedFromQueue', uuid);
                break;
        }
        fs_1.default.unlinkSync(exports.configFolder + `queue${path_1.sep}${uuid}.json`);
        delete exports.queue[uuid];
    }
}
exports.cancelDownload = cancelDownload;
function cancelAllDownloads() {
    exports.queueOrder = [];
    let currentItem = null;
    Object.values(exports.queue).forEach((downloadObject) => {
        if (downloadObject.status == 'downloading') {
            exports.currentJob.downloadObject.isCanceled = true;
            exports.listener.send('cancellingCurrentItem', downloadObject.uuid);
            currentItem = downloadObject.uuid;
        }
        fs_1.default.unlinkSync(exports.configFolder + `queue${path_1.sep}${downloadObject.uuid}.json`);
        delete exports.queue[downloadObject.uuid];
    });
    fs_1.default.writeFileSync(exports.configFolder + `queue${path_1.sep}order.json`, JSON.stringify(exports.queueOrder));
    exports.listener.send('removedAllDownloads', currentItem);
}
exports.cancelAllDownloads = cancelAllDownloads;
function clearCompletedDownloads() {
    Object.values(exports.queue).forEach((downloadObject) => {
        if (downloadObject.status === 'completed') {
            fs_1.default.unlinkSync(exports.configFolder + `queue${path_1.sep}${downloadObject.uuid}.json`);
            delete exports.queue[downloadObject.uuid];
        }
    });
    exports.listener.send('removedFinishedDownloads');
}
exports.clearCompletedDownloads = clearCompletedDownloads;
function restoreQueueFromDisk() {
    if (!fs_1.default.existsSync(exports.configFolder + 'queue'))
        fs_1.default.mkdirSync(exports.configFolder + 'queue');
    const allItems = fs_1.default.readdirSync(exports.configFolder + 'queue');
    allItems.forEach((filename) => {
        if (filename == 'order.json') {
            exports.queueOrder = JSON.parse(fs_1.default.readFileSync(exports.configFolder + `queue${path_1.sep}order.json`).toString());
        }
        else {
            const currentItem = JSON.parse(fs_1.default.readFileSync(exports.configFolder + `queue${path_1.sep}${filename}`).toString());
            if (currentItem.status === 'inQueue') {
                let downloadObject;
                switch (currentItem.__type__) {
                    case 'Single':
                        downloadObject = new Single(currentItem);
                        break;
                    case 'Collection':
                        downloadObject = new Collection(currentItem);
                        break;
                    case 'Convertable':
                        downloadObject = new Convertable(currentItem);
                        break;
                }
                exports.queue[downloadObject.uuid] = downloadObject.getEssentialDict();
                exports.queue[downloadObject.uuid].status = 'inQueue';
            }
            else {
                exports.queue[currentItem.uuid] = currentItem;
            }
        }
    });
}
exports.restoreQueueFromDisk = restoreQueueFromDisk;
