'use strict'
module.exports = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Xss-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Content-Type-Options', 'nosniff');
<<<<<<< HEAD
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
=======
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
>>>>>>> fb7765b847ec186ab03a029e2a6a92bfb7ac8786
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    /**
     * @param {String} name
     * @param {String} value
     * @param {Object} params
     */
    res.setCookie = function (name, value, params) {
        if (typeof name === 'string' && typeof value === 'string') {
            let cookie = name + '=' + value + '; path=/';
            if (typeof params.maxage === 'number') {
                cookie += '; Max-Age=' + params.maxage;
            }
            // if (params.Secure || params.secure) {
            //     cookie += '; Secure';
            // }
            if (params.HttpOnly || params.httponly) {
                cookie += '; HttpOnly';
            }

            this.setHeader('Set-Cookie', cookie);
        }
        else throw new TypeError('Invalid arguments');
    }

    next();
}
