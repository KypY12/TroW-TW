'use strict'

module.exports = function initCookie(req, res, next) {
    const cookieString = req.headers['cookie'];
    const cookie = {};
    if (cookieString) {
        const cookies = cookieString.split(';');
        for (const i of cookies) {
            const j = i.split('=');
            cookie[j[0].trim()] = j[1].trim();
        }
    }
    req.cookie = cookie;

    next();
}
