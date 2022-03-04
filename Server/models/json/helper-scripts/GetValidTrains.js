// const fs = require("fs");
// const year = 2019;
// const yearFile = (year - 1) + '-' + year;
// const stationsComplete = require('../trains-info/' + yearFile + '.json');

// let trainsNumbers = [];

// stationsComplete.forEach(station => {
//     station.directRoutes.forEach(route => {
//         if(trainsNumbers.findIndex(function (elem) {
//             return elem === route.NumarTren;
//         }) === -1){
//             trainsNumbers.push(route.NumarTren);
//         }
            
//     });
// });

// fs.writeFile("./" + yearFile + "trainNumbers.json", JSON.stringify(trainsNumbers, null, 4), (err) => { });