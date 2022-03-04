// // API URL : https://us1.locationiq.com/v1/search.php?key=CHEIA&q=NUMELE_CAUTAT&format=json

// const https = require("https");
// const fs = require('fs');

// let year = "2018-2019";

// let dataJSON = fs.readFileSync('../trains-info/'+year+'.json');
// let objJSON = JSON.parse(dataJSON);


// let stationNames = [];

// objJSON.forEach((currentStation) => {
//     if(stationNames.findIndex((element)=> {return element.stationName === currentStation.stationName;}) === -1){
//         stationNames.push({stationName: currentStation.stationName, lat: 0, lon: 0});
//     }

//     currentStation.directRoutes.forEach(route => {
//         if(stationNames.findIndex((element)=> {return element.stationName === route.DenumireStatieDestinatie;}) === -1){
//         stationNames.push({stationName: route.DenumireStatieDestinatie, lat: 0, lon: 0});
//         }
//     });
// });

// // console.log(stationNames);

// const FILE_WITH_LOCATIONS = "../locations/"+year+".json";
// const API_KEY = 'e95bbe4ae8bb25';

// let count = 0;

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
//             try{
//             let resJSON = JSON.parse(resBody)[0];
//             console.log(resBody);
//             if (resJSON == null) {
//                 count++;
//                 return;
//             }

//             let station = {stationName: stationName, lat: resJSON.lat, lon: resJSON.lon}

//             let locationsData = fs.readFileSync(FILE_WITH_LOCATIONS);
//             let locationsJSON = JSON.parse(locationsData);
//             locationsJSON.push(station);
//             fs.writeFile(FILE_WITH_LOCATIONS, JSON.stringify(locationsJSON, null, 4), (err) => {
                
//             });
//         }catch(error){
//             console.log(error);
//             return;
//         }
//         });

//     });

//     req.on("error", (err) => {
//         console.log(`Request error: ${err.message}`);
//     });

//     req.end();
// }


// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// async function main(){

//     for(let index = 0; index < stationNames.length; index++){
//         // if([224,335,737,738,745,1045,1439].findIndex((elem)=>{return elem===index;}) !== -1 ){
//         //     continue;
//         // }
//         let stationName = stationNames[index].stationName;
//         let URL = encodeURI('https://us1.locationiq.com/v1/search.php?key='+API_KEY+'&q='+stationName+'&format=json');
//         apiRequest(URL, stationName);
//         console.log(index);
//         await sleep(1000);
//     }

//     // let faultArray = [224,335,737,738,745,1045,1439];
//     // for(let index = 0; index < faultArray.length; index++){
//     //     let stationName = stationNames[faultArray[index]].stationName;
//     //     let URL = encodeURI('https://us1.locationiq.com/v1/search.php?key='+API_KEY+&q='+stationName+'&format=json');
//     //     apiRequest(URL, stationName);
//     //     console.log(index);
//     //     await sleep(1000);
//     // }

//     console.log(count);
// };

// main();
