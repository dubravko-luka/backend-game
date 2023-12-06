import * as WebSocket from 'ws';
import * as http from 'http';
import * as Router from '../router'

namespace SocketService {
  export const start = (wss, param: any) => {
    wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
      const origin: string = req.headers.origin as string;

      // Check connect valid
      if (isOriginAllowed(origin)) {
        ws.close();
        console.log('disconnected from', origin);
        return;
      }

      const urlParams = new URLSearchParams(req?.url?.slice(2));
      Router.router(ws, { ...param, origin }, urlParams)
    });
  }

  function isOriginAllowed(origin: string): boolean {
    const allowedOrigins: string[] = process.env.ENVIROMENT === 'DEVELOPMENT' ? [] : [];
    return allowedOrigins.length > 0 && allowedOrigins.includes(origin);
  }
}

export = SocketService