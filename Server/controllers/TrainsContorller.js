'use strict'
const viewModule = require('../views/view');
const modelModule = require('../models/TrainsModel');


class Trains {
    
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    leave(req, res){
        try {
            let location = req.query.get('location');
            let year = req.query.get('year');

            let leaveInfo = {};
            leaveInfo.leaves = this.model.leave(location, year);
            leaveInfo.location = location;
            

            const response = this.view.generateJson(leaveInfo);
            res.end(response);

        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }

    }

    arrives(req, res){
        try {
            let location = req.query.get('location');
            let year = req.query.get('year');

            let arrivesInfo = {};
            arrivesInfo.arrives = this.model.arrives(location, year);
            arrivesInfo.location = location;


            const response = this.view.generateJson(arrivesInfo);
            res.end(response);

        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }
    }


    train(req, res){
        try {
            let id = req.query.get('id');
            let year = req.query.get('year');

            let trainInfo = this.model.train(id, year);

            const response = this.view.generateJson(trainInfo);
            res.end(response);

        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }
    }

};

module.exports = new Trains(new modelModule, new viewModule);