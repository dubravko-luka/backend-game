"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.stringFromWebsocket = exports.jsonToWebsocket = void 0;
function jsonToWebsocket(value) {
    try {
        const message = JSON.stringify({
            ...value,
        });
        return message;
    }
    catch {
        return null;
    }
}
exports.jsonToWebsocket = jsonToWebsocket;
function stringFromWebsocket(string) {
    try {
        return JSON.parse(`${string}`);
    }
    catch {
        return null;
    }
}
exports.stringFromWebsocket = stringFromWebsocket;
function generateRandomString(length = 22) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=index.js.map