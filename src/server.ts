// import app from './app';
// import * as http from 'http';

// export const server = https.createServer(app);

// const port = process.env.PORT || 8083

// server.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

import * as https from 'https';
import * as fs from 'fs';

const server = https.createServer({
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
});

const port = process.env.PORT || 8083

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
