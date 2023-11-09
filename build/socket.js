"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const server_1 = require("./server");
const SocketService = require("./services/socket.service");
class Socket {
    constructor() {
        this.wss = new WebSocket.Server({ server: server_1.server });
        this.rooms = new Map();
        this.roomsId = new Map();
        this.start();
    }
    start() {
        const option = {
            rooms: this.rooms,
            roomsId: this.roomsId
        };
        SocketService.start(this.wss, option);
    }
}
new Socket();
//# sourceMappingURL=socket.js.map