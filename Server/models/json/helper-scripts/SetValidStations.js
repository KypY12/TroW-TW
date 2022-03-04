// const fs = require("fs");
// const year = 2014;
// const yearFile = (year - 1) + '-' + year;
// const stationsComplete = require('../trains-info/' + yearFile + '.json');
// const stationsLocations = require('../locations/' + yearFile + '.json');

// let stationNames = [];
// stationsLocations.forEach(station => {
//     stationNames.push(station.stationName);
// });

// stationsComplete.forEach(station => {
//     if(stationNames.findIndex(function (element) {
//         return element === station.stationName;
//     }) === -1){
//         station.validLocation = "no";
//     }else{
//         station.validLocation = "yes";
//     }
// });

// fs.writeFile("../trains-info/" + yearFile + ".json", JSON.stringify(stationsComplete, null, 4), (err) => { });