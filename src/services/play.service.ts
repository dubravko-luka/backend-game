import * as WebSocket from 'ws';

namespace PlayService {
    export const play = (ws: any, param: any) => {
        const { rooms, room } = param
        if (!room || !isRoomValid(room)) {
            ws.close();
            return;
        }

        if (!rooms.has(room)) {
            rooms.set(room, new Set());
        }

        if (rooms.get(room).size < 2) {
            rooms.get(room).add(ws);
        }

        ws.on('message', message => {
            console.log('------->', rooms.get(room).size, JSON.parse(message.toString()).turn);
            if (rooms.get(room).size === 2 && JSON.parse(message.toString()).turn === 'check-turn') {
                const players: any = Array.from(rooms.get(room));
                players[players.length - 1].send('Enemy turn');
                rooms.get(room).forEach(client => {
                    if (client !== players[players.length - 1] && client.readyState === WebSocket.OPEN) {
                        client.send(`Your turn`);
                    }
                });
            } else if (rooms.get(room).size === 2 && JSON.parse(message.toString()).turn === 'reverse-turn') {
                broadcastMessage(message, ws, rooms, room);
            } else {
                broadcastMessage(message, ws, rooms, room);
            }
        });

        ws.on('close', () => {
            if (rooms.has(room)) {
                const roomSet = rooms.get(room);
                roomSet.delete(ws);
                rooms.set(room, roomSet);
            }
        });
    }

    function isRoomValid(room) {
        return true
    }

    function broadcastMessage(message, sender, rooms, room) {
        rooms.get(room).forEach(client => {
            if (client !== sender && client.readyState === WebSocket.OPEN) {
                client.send(`${message}`);
            }
        });
    }
}

export = PlayService;