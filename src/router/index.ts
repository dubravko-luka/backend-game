import * as PlayService from "../services/play.service";

namespace Router {
    export const router = (ws, param, urlParams) => {
        const path = urlParams.get('path');

        switch (path) {
            case 'play':
                const room = urlParams.get('room');
                PlayService.play(ws, { ...param, room });
                break;
            default: break;
        }
    }
}

export = Router