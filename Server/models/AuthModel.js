'use strict'
const nodeValidator = require('node-input-validator');
const crypto = require('crypto');
const db = require('../util/database');
const { ValidationError, EmailAlreadyExists } = require('../util/errors');


module.exports = class Auth {
    async login(email, password) {
        let validator = new nodeValidator({ email, password }, {
            email: 'required|email|maxLength:50',
            password: 'required|maxLength:50|minLength:8'
        });

        const matched = await validator.check();

        if (!matched) {
            throw new ValidationError(JSON.stringify(validator.errors));
        }

        const res = await db.query('select salt, hash from users where email=$1', [email]);
        const hash = crypto.pbkdf2Sync(password, res.rows[0].salt, 2048, 64, 'sha512').toString('hex');
        if (hash === res.rows[0].hash) return { login: true };

        return { login: false };
    }

    async register(email, password, firstName, lastName) {
        let validator = new nodeValidator({ email, password, firstName, lastName }, {
            email: 'required|email|maxLength:50',
            password: 'required|maxLength:50|minLength:8',
            firstName: 'required|string|maxLength:50',
            lastName: 'required|string|maxLength:50'
        });

        const matched = await validator.check();

        if (!matched) {
            throw new ValidationError(JSON.stringify(validator.errors));
        }

        const duplicateCheck = await db.query('select * from users where email=$1', [email]);

        if (duplicateCheck.rowCount === 0) {
            const salt = crypto.randomBytes(64).toString('hex');
            const hash = crypto.pbkdf2Sync(password, salt, 2048, 64, 'sha512').toString('hex');

            const sql = 'insert into users (email, salt, hash, first_name, last_name) values ($1,$2,$3,$4,$5)';

            await db.query(sql, [email, salt, hash, firstName, lastName]);

            return { "registered": true };

        }
        else throw new EmailAlreadyExists();

    }
}
