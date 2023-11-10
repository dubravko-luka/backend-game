import * as WebSocket from 'ws';
import * as SocketService from './services/socket.service'
const express = require('express')

// app.get('/', (req, res) => {
//     res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//     res.send('This is my about route..... ')
// })

class Socket {
    private rooms = new Map();
    private roomsId = new Map();

    constructor() {
        this.start()
    }

    public start() {
        const app = express()
        const PORT = 8083

        const server = app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

        const wss = new WebSocket.Server({ server });

        const option = {
            rooms: this.rooms,
            roomsId: this.roomsId
        }
        SocketService.start(wss, option)
    }
}

new Socket()

// Export the Express API