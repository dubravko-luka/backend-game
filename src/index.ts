import * as WebSocket from 'ws';
import * as SocketService from './services/socket.service'
const express = require('express')

const app = express()
const PORT = 8083

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
    new Socket()
})

// app.get('/about', (req, res) => {
//     res.send('This is my about route..... ')
// })

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

// Export the Express API
module.exports = app