import * as PlayService from "../services/play.service";

namespace Router {
    export const router = (ws, param, urlParams) => {
        const path = urlParams.get('path');

        switch (path) {
            case 'play':
                const room = urlParams.get('room');
                const user = urlParams.get('user');
                PlayService.play(ws, { ...param, room, user });
                break;
            default: break;
        }
    }
}

export = Router