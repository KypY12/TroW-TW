'use strict'
const viewModule = require('../views/view');
const modelModule = require('../models/UserModel');


class User {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async deleteAccount(req, res) {
        try {
            const password = req.body.password;
            const answer = await this.model.deleteAccount(req.email, password);
            const msg = this.view.generateJson(answer);
            res.end(msg);
        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }
    }

    async editUserDetails(req, res) {
        try {
            const email = req.email;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;

            const answer = await this.model.editUserDetails(email, firstName, lastName);
            const response = this.view.generateJson(answer);

            res.end(response);

        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }
    }



    async editPassword(req, res) {
        try {
            const oldPass = req.body.oldPass;
            const newPass = req.body.newPass;

            const answer = await this.model.editPassword(req.email, oldPass, newPass);
            const msg = this.view.generateJson(answer);
            res.end(msg);
        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }
    }

};


module.exports = new User(new modelModule, new viewModule);
