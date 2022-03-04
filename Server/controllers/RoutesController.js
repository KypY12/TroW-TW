'use strict'
const viewModule = require('../views/view');
const modelModule = require('../models/RoutesModel');


class Routes {
    
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    route(req, res){
        try {
            let locations = req.query.getAll('locations');
            let year = req.query.get('year');
            
            console.log(locations);
            console.log(year);
            
            let routes = this.model.route(locations, year);
            
            const response = this.view.generateJson(routes);
            res.end(response);

        } catch (err) {
            console.log(err);
            res.sendCode(500);
        }


    }

};

module.exports = new Routes(new modelModule, new viewModule);