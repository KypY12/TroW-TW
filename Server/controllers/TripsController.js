'use strict'
const viewModule = require('../views/view');
const modelModule = require('../models/TripsModel');


class Trips {
    
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    add(route){
        

    }

    remove(id){

    }

};

module.exports = new Trips(new modelModule, new viewModule);