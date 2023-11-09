import * as WebSocket from 'ws';
import { server } from './server'
import * as SocketService from './services/socket.service'

class Socket {

    private wss = new WebSocket.Server({ server });
    private rooms = new Map();
    private roomsId = new Map();

    constructor() {
        this.start()
    }

    public start() {
        const option = {
            rooms: this.rooms,
            roomsId: this.roomsId
        }
        SocketService.start(this.wss, option)
    }
}

new Socket()