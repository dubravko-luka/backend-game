"use strict";
// import app from './app';
// import * as http from 'http';
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
// export const server = http.createServer(app);
// const port = process.env.PORT || 8083
// server.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
const https = require("https");
const fs = require("fs");
const path = require("path");
const app_1 = require("./app");
exports.server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, './ssl/key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, './ssl/cert.pem'), 'utf-8')
}, app_1.default);
const port = process.env.PORT || 8083;
exports.server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=server.js.map