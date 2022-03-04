'use strict'
module.exports = function (req, res, next) {
    /**
     * Send error message
     * @param {Number} code
     * @param {String} msg 
     */
    res.sendCode = function (code, msg) {
        const codes = {
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'Not Found',
            500: 'Internal Server Error'
        }
        const answer = {
            error: codes[code] ? codes[code] : codes[500],
            details: msg ? msg : "None"
        }
        res.end(JSON.stringify(answer));
    }

    next();
}
