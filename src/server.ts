import app from './app';
import * as http from 'http';

export const server = http.createServer(app);

const port = process.env.PORT || 8083

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});