// const fs = require('fs');
// const convert = require('xml-js');

// let files = fs.readdirSync('../XMLs/');
// for (const iterator of files) {


//     const xml = fs.readFileSync('../XMLs/' + iterator, 'utf8');

//     let result = convert.xml2json(xml, { compact: true, spaces: 4 });
//     let json = JSON.parse(result);

//     fs.writeFileSync(iterator.replace('.xml', '.json').replace('mers-trensntfc', ''), JSON.stringify(json.XmlIf.XmlMts.Mt.Trenuri, null, 4), 'utf8');
// }
