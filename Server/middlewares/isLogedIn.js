'use strict'

module.exports = function (req, res, next) {
    if (req.role && req.email) next();
    else res.sendCode(401);
}
