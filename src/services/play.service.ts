import { PLAY_ENUM_SOCKET } from '../types/enum';
import { jsonToWebsocket, stringFromWebsocket } from '../utils'
import * as WebSocket from 'ws';

namespace PlayService {
    export const play = async (ws: any, param: any) => {
        const { rooms, room, roomsId, user } = param
        if (!room || !isRoomValid(room)) {
            ws.close();
            return;
        }

        if (!rooms.has(room)) {
            rooms.set(room, new Set());
            roomsId.set(room, new Set());
        }

        const listRoomId: any = Array.from(roomsId.get(room));
        if (listRoomId.length === 0 || !listRoomId.includes(user)) {
            rooms.get(room).add(ws);
            roomsId.get(room).add(user);
        }

        ws.on('message', message => {
            const _message = stringFromWebsocket(message)
            const listRoomId: any = Array.from(roomsId.get(room));
            if (_message.type === PLAY_ENUM_SOCKET.JOIN && listRoomId.length === 1 && listRoomId[0] === user) {
                ws.close();
                rooms.set(room, new Set());
                roomsId.set(room, new Set());
            } else {
                if (_message.type === PLAY_ENUM_SOCKET.JOIN) {
                    const messageToJoin = jsonToWebsocket({
                        ..._message,
                        action: PLAY_ENUM_SOCKET.JOIN // Send to joiner room
                    })
                    const messageToCreate = jsonToWebsocket({
                        ..._message,
                        action: PLAY_ENUM_SOCKET.CREATE // Send to creator room
                    })
                    ws.send(`${messageToJoin}`)
                    broadcastMessage(messageToCreate, ws, rooms, room);
                } else {
                    broadcastMessage(message, ws, rooms, room);
                }
            }
        });

        ws.on('close', () => {
            if (roomsId.get(room).size > 0) {
                const message = jsonToWebsocket({ type: PLAY_ENUM_SOCKET.CLOSE })
                broadcastMessage(message, ws, rooms, room);

                rooms.set(room, new Set());
                roomsId.set(room, new Set());
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