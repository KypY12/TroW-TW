'use strict'
const cache = require('../util/cache');
const tokens = require('../util/tokens');
const crypto = require('crypto');
const TTL = 10800; //3 hours

module.exports = async function (req, res, next) {
    try {
        res.authorize = authWrapper(res);
        if (req.cookie.auth) {
            const auth = await cache.hgetall(req.cookie.auth);
            if (auth) {
                req.role = auth.role;
                req.email = auth.user;
                await cache.expire(req.cookie.auth, TTL);
                res.setCookie('sess', req.cookie.auth, { httponly: true, secure: true, maxage: TTL });
            }
            else res.sendCode(401);
        }
        else if (req.cookie.sess) {
            const result = await cache.get(req.cookie.sess);
            if (result === null) {
                const token = tokens();
                await cache.set(token.cookie, token.csrf, 'EX', TTL);
                res.setCookie('sess', token.cookie, { httponly: true, secure: true });
            }
            else {
                await cache.set(req.cookie.sess, result, 'EX', TTL);
            }
        }
        else if (!req.cookie.sess) {
            const token = tokens();
            await cache.set(token.cookie, token.csrf, 'EX', TTL);
            res.setCookie('sess', token.cookie, { httponly: true, secure: true });
        }
        next();


    } catch (err) {
        console.log(err);
        res.sendCode(500);
    }

}

function authWrapper(res) {
    /**
     * Set auth cookie after a succesful login
     * @param {String} email 
     * @param {String} salt 
     * @returns {Promise<String>} 
     */
    return async function authorize(email) {
        //store in as cookie ssid, csrf, hash(username+salt), role
        const createdAt = new Date().getTime();
        const token = tokens();

        await cache.hmset(token.cookie, 'csrf', token.csrf, 'role', '1', 'user', email, 'time', createdAt);
        await cache.expire(token.cookie, TTL);
        res.setCookie('auth', token.cookie, { httponly: true, maxage: TTL });
        return token.cookie;
    }
}
