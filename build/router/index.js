"use strict";
const PlayService = require("../services/play.service");
var Router;
(function (Router) {
    Router.router = (ws, param, urlParams) => {
        const path = urlParams.get('path');
        switch (path) {
            case 'play':
                const room = urlParams.get('room');
                const user = urlParams.get('user');
                PlayService.play(ws, { ...param, room, user });
                break;
            default: break;
        }
    };
})(Router || (Router = {}));
module.exports = Router;
//# sourceMappingURL=index.js.map