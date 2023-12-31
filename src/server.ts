// import app from './app';
// import * as http from 'http';

// export const server = http.createServer(app);

// const port = process.env.PORT || 8083

// server.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import app from './app';

export const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, './ssl/key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, './ssl/cert.pem'), 'utf-8')
}, app);

const port = process.env.PORT || 8083

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
