// const fs = require('fs');

// let year = "2018-2019";

// let dataJSON = fs.readFileSync('../original-JSONs/'+year+'.json');

// let objJSON = JSON.parse(dataJSON);
// let trainsArray = objJSON['Tren'];


// class Station {
//     constructor(stationCode, stationName){
//         this.stationCode = stationCode;
//         this.stationName = stationName;
//         this.directRoutes = [];
//     }

//     addDirectRoute(directRoute){
//         this.directRoutes.push(directRoute);
//     }

// }

// let stations = [];



// function checkExistance(station, stationsArray){
//     for (let stationIndex = 0; stationIndex < stationsArray.length; stationIndex++) {
//         const currentStation = stationsArray[stationIndex];
//         if(currentStation.stationName === station.stationName &&
//             currentStation.stationCode === station.stationCode){
//                 return true;
//         }
//     }

//     return false;
// }

// const processJSON = function() {
//     for (let trainIndex = 0; trainIndex < trainsArray.length; trainIndex++) {
//         const currentTrain = trainsArray[trainIndex];

//         const currentDirectRoutes = currentTrain['Trase']['Trasa']['ElementTrasa'];
//         for (let routeIndex = 0; routeIndex < currentDirectRoutes.length; routeIndex++) {
//             const currentRoute = currentDirectRoutes[routeIndex];

//             let station = new Station(currentRoute['_attributes']['CodStaOrigine'], currentRoute['_attributes']['DenStaOrigine']);
//             // Verifica daca exista deja
//             if(!checkExistance(station, stations)){

//                 // Verificam in continuarea rutelor trenului curent
//                 for (let nextRoutesIndex = routeIndex; nextRoutesIndex < currentDirectRoutes.length; nextRoutesIndex++) {
//                     const nextRoute = currentDirectRoutes[nextRoutesIndex];
                    
//                     if(nextRoute['_attributes']['CodStaOrigine'] === station.stationCode && nextRoute['_attributes']['CodStaDest'] !== station.stationCode){
//                         station.addDirectRoute({
//                             'CodStatieDestinatie': nextRoute['_attributes']['CodStaDest'],
//                             'DenumireStatieDestinatie': nextRoute['_attributes']['DenStaDestinatie'],
    
//                             'NumarTren': currentTrain['_attributes']['Numar'],
//                             'OperatorTren': currentTrain['_attributes']['Operator'],
//                             'OraPlecare': nextRoute['_attributes']['OraP'],
//                             'OraSosire': nextRoute['_attributes']['OraS'],
//                             'StationareSecunde': nextRoute['_attributes']['StationareSecunde'],
//                             'Viteza': nextRoute['_attributes']['VitezaLivret']
//                         });
//                     }
            
//                 }

//                 // Verificam si la restul trenurilor
//                 // Daca trenul actual este ultimul nu mai verificam
//                 if(trainIndex < trainsArray.length - 1){

//                     for (let nextTrainsIndex = trainIndex+1; nextTrainsIndex < trainsArray.length; nextTrainsIndex++) {
//                         const nextTrain = trainsArray[nextTrainsIndex];

//                         const nextDirectRoutes = nextTrain['Trase']['Trasa']['ElementTrasa'];
                        
//                         for (let nextRoutesIndex = 0; nextRoutesIndex < nextDirectRoutes.length; nextRoutesIndex++) {
//                             const nextRoute = nextDirectRoutes[nextRoutesIndex];
                            
//                             if(nextRoute['_attributes']['CodStaOrigine'] === station.stationCode && nextRoute['_attributes']['CodStaDest'] !== station.stationCode){
//                                 station.addDirectRoute({
//                                     'CodStatieDestinatie': nextRoute['_attributes']['CodStaDest'],
//                                     'DenumireStatieDestinatie': nextRoute['_attributes']['DenStaDestinatie'],
            
//                                     'NumarTren': nextTrain['_attributes']['Numar'],
//                                     'OperatorTren': nextTrain['_attributes']['Operator'],
//                                     'OraPlecare': nextRoute['_attributes']['OraP'],
//                                     'OraSosire': nextRoute['_attributes']['OraS'],
//                                     'StationareSecunde': nextRoute['_attributes']['StationareSecunde'],
//                                     'Viteza': nextRoute['_attributes']['VitezaLivret']
//                                 });
//                             }
                    
//                         }

                        
//                     }


//                 }

//                 stations.push(station);
            
//             }   
            
//         }
        
//     }
// }


// processJSON();

// fs.writeFileSync(year+'.json', JSON.stringify(stations, null, 4));



// // currentTrain['_attributes']['Numar']
// // currentTrain['_attributes']['Operator']

// // currentRoute['_attributes']['CodStaDest']
// // currentRoute['_attributes']['DenStaDestinatie']
// // currentRoute['_attributes']['OraP']
// // currentRoute['_attributes']['OraS']
// // currentRoute['_attributes']['StationareSecunde']
// // currentRoute['_attributes']['VitezaLivret']