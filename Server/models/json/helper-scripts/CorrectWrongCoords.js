// // https://geocode.xyz/NUME?json=1
// const fs = require('fs');
// const https = require('https');

// let dataJSON = fs.readFileSync('../locations/wrongCoordsStations.json');

// let objJSON = JSON.parse(dataJSON);

// let stationNames = [];

// objJSON.forEach((currentStation) => {
//     stationNames.push({stationName: currentStation.stationName, lat: 0, lon: 0});
// });




// const FILE_WITH_LOCATIONS = "../locations/c1-locations.json";
// // cosnt API_KEY = 'e95bbe4ae8bb25';

// fs.writeFile(FILE_WITH_LOCATIONS, "[]", (err) => {});

// function apiRequest(URL, stationName) {
//     let resBody = "";
//     const req = https.request(URL, (res) => {
        
//         res.on("error", (err) => {
//             console.log(`Request error: ${err.message}`);
//         });

//         res.on("data", (chunk) => {
//             resBody += chunk;
//         });

//         res.on("end", () => {
//             let resJSON = JSON.parse(resBody)[0];
//             if(!resJSON){
//                 return 0;
//             }
//             let station = {stationName: stationName, lat: resJSON.latt, lon: resJSON.longt}


//             let locationsData = fs.readFileSync(FILE_WITH_LOCATIONS);
//             let locationsJSON = JSON.parse(locationsData);
//             locationsJSON.push(station);
//             fs.writeFile(FILE_WITH_LOCATIONS, JSON.stringify(locationsJSON, null, 4), (err) => {
                
//             });
//         });

//     });

//     req.on("error", (err) => {
//         console.log(`Request error: ${err.message}`);
//     });

//     req.end();
//     return 1;
// }


// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// let faultArray = [];

// async function main(){

//     for(let index = 0; index < stationNames.length; index++){
//         // if([224,335,737,738,745,1045,1439].findIndex((elem)=>{return elem===index;}) !== -1 ){
//         //     continue;
//         // }
//         let stationName = stationNames[index].stationName;
//         let URL = encodeURI('https://geocode.xyz/'+stationName+'?json=1');
//         if(apiRequest(URL, stationName) === 0){
//             faultArray.push(index);
//         }
//         console.log(index);
//         await sleep(1000);
//     }

//     console.log(faultArray.length);

// }

// main();