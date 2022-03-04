'use strict'
const https = require('http');
const fs = require('fs');
const dotenv = require('dotenv').config({ path: './config.env' });
const attachErrorCodes = require('./middlewares/attachErrorCodes');
const headers = require('./middlewares/headers');
const cookiesParser = require('./middlewares/cookieParser');
const authorizer = require('./middlewares/authorizer');


if (dotenv.error) {
    throw dotenv.error;
}


const server = require('./server');
const app = new server();

const options = {
    key: fs.readFileSync('./util/key.pem'),
    cert: fs.readFileSync('./util/cert.pem')
};

const httpServer = https.createServer((req, res) => app.run(req, res));

httpServer.listen(process.env.PORT);



//  Attach middleware here:
app.use(attachErrorCodes);
app.use(cookiesParser);
app.use(headers);
app.use(authorizer);
