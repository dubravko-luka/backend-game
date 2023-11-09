"use strict";
const Router = require("../router");
var SocketService;
(function (SocketService) {
    SocketService.start = (wss, param) => {
        wss.on('connection', (ws, req) => {
            const origin = req.headers.origin;
            // Check connect valid
            if (isOriginAllowed(origin)) {
                ws.close();
                console.log('disconnected from', origin);
                return;
            }
            const urlParams = new URLSearchParams(req?.url?.slice(2));
            Router.router(ws, { ...param, origin }, urlParams);
        });
    };
    function isOriginAllowed(origin) {
        const allowedOrigins = process.env.ENVIROMENT === 'DEVELOPMENT' ? [] : [];
        return allowedOrigins.length > 0 && allowedOrigins.includes(origin);
    }
})(SocketService || (SocketService = {}));
module.exports = SocketService;
//# sourceMappingURL=socket.service.js.map