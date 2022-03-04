const path = require('path');
const fs = require('../Server/util/utilities')

module.exports = async (req, res, pathname) => {
    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
    };
    try {
        let exists = await fs.existsFileAsync('./public' + pathname);
        if (exists) {
            let file = await fs.readFileAsync('./public' + pathname);
            if (file) {
                const ext = path.parse(pathname).ext;
                res.setHeader('Content-type', map[ext] || 'text/plain');
                res.end(file);
            }
            else {
                res.statusCode = 404;
                res.end(`File not found!`);
            }
        }
        else {
            res.statusCode = 404;
            res.end(`File not found!`);
        }

    } catch (e) {
        res.statusCode = 404;
        res.end(`File not found!`);
        console.log(e);
    }



}
