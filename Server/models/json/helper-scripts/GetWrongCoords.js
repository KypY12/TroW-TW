import { ReadStream, unlink } from "fs";

// const fs = require('fs');

// const locations2014 = require('../locations/2013-2014.json');
// const locations2015 = require('../locations/2014-2015.json');
// const locations2016 = require('../locations/2015-2016.json');
// const locations2017 = require('../locations/2016-2017.json');
// const locations2018 = require('../locations/2017-2018.json');
// const locations2019 = require('../locations/2018-2019.json');

// const locationsJSONs = {
//     '2014': locations2014,
//     '2015': locations2015,
//     '2016': locations2016,
//     '2017': locations2017,
//     '2018': locations2018,
//     '2019': locations2019
// }

// let year = "2019";

// let objJSON = locationsJSONs[year];

// const N_LIMIT = 48.3;
// const S_LIMIT = 43;
// const E_LIMIT = 30;
// const W_LIMIT = 20;

// let wrongCoordsIndex = [];

// for(let index = 0; index < objJSON.length; index++){
//     let lat = parseFloat(objJSON[index].lat);
//     let lon = parseFloat(objJSON[index].lon);

//     if (lat >= N_LIMIT || lat <= S_LIMIT || lon >= E_LIMIT || lon <= W_LIMIT) {

//         wrongCoordsIndex.push(index);
//     }
// }

// let wrongCoordsStations = [];
// wrongCoordsIndex.reverse();
// wrongCoordsIndex.forEach(index => {
//     wrongCoordsStations.push(objJSON[index]);
//     objJSON.splice(index, 1);
// });

// console.log(wrongCoordsIndex.length);
// console.log(objJSON.length);


// fs.writeFile("../locations/2018-2019.json", JSON.stringify(objJSON, null, 4), (err) => {});
// fs.writeFile("../locations/wrongCoordsStations.json", JSON.stringify(wrongCoordsStations, null, 4), (err) => {});


    