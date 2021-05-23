"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotLoggedIn = exports.AlreadyInQueue = exports.QueueError = exports.isBadRequestError = exports.BadRequestError = exports.consoleError = exports.consoleInfo = void 0;
const ramda_1 = require("ramda");
const prependDeemix = ramda_1.concat('[deemix-server]: ');
const consoleInfo = (errorText) => console.info(prependDeemix(errorText));
exports.consoleInfo = consoleInfo;
const consoleError = (errorText) => console.error(prependDeemix(errorText));
exports.consoleError = consoleError;
class BadRequestError extends Error {
    constructor() {
        super();
        this.message = 'Bad request!';
    }
}
exports.BadRequestError = BadRequestError;
const isBadRequestError = (error) => error instanceof BadRequestError;
exports.isBadRequestError = isBadRequestError;
class QueueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'QueueError';
    }
}
exports.QueueError = QueueError;
class AlreadyInQueue extends QueueError {
    constructor(dwObj, silent) {
        super(`${dwObj.artist} - ${dwObj.title} is already in queue.`);
        this.name = 'AlreadyInQueue';
        this.item = dwObj;
        this.silent = silent;
    }
}
exports.AlreadyInQueue = AlreadyInQueue;
class NotLoggedIn extends QueueError {
    constructor() {
        super(`You must be logged in to start a download.`);
        this.name = 'NotLoggedIn';
    }
}
exports.NotLoggedIn = NotLoggedIn;
