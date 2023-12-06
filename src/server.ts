import app from './app';
import * as https from 'https';
import * as fs from 'fs';

const options = {
    cert: fs.readFileSync(`${__dirname}/ssl/cert.pem`),
    key: fs.readFileSync(`${__dirname}/ssl/key.pem`),
};

export const server = https.createServer(options, app);

const port = process.env.PORT || 8083

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});