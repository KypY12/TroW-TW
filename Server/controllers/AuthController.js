'use strict'
const viewModule = require('../views/view');
const modelModule = require('../models/AuthModel');
const { ValidationError, EmailAlreadyExists } = require('../util/errors');


class Auth {
    constructor(authModel, view) {
        this.model = authModel;
        this.view = view;
    }

    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const answer = await this.model.login(email, password);

            if (answer.login) {
                await res.authorize(email);


                const response = this.view.generateJson({ "login": true });
                res.end(response);
            } else {
                const response = this.view.generateJson({ "login": false });
                res.end(response);
            }


        } catch (err) {
            console.log(err);
            if (err instanceof ValidationError) {
                res.sendCode(400, JSON.parse(err.message));
            }
            else {
                res.sendCode(500);
            }
        }

    }

    async register(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;

            const answer = await this.model.register(email, password, firstName, lastName);
            const response = this.view.generateJson(answer);

            res.end(response);

        } catch (err) {
            console.log(err);
            if (err instanceof ValidationError) {
                res.sendCode(400, err.message);
            }
            else if (err instanceof EmailAlreadyExists) {
                res.sendCode(400, 'Email already used');
            }
            else {
                res.sendCode(500);
            }
        }


    }
    isLoggedIn(req, res) {
        const response = this.view.generateJson({ 'login': true });
        res.end(response)
    }
}
module.exports = new Auth(new modelModule, new viewModule);
