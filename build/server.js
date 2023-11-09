"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const app_1 = require("./app");
const http = require("http");
exports.server = http.createServer(app_1.default);
const port = process.env.PORT || 8083;
exports.server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=server.js.map