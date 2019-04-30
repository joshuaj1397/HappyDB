const csv = require('csv-parser');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
var countries = {};
var dataArray = [];

const getCountries = function() {
  fs.createReadStream('../Data/Country.csv')
    .pipe(csv())
    .on('data', async (data) => {
      countries[data.Country] = {};
    })
    .on('end', function() {
        console.log('Done mapping countries!');
        getCoords();
  });
}

const getCoords = function() {
  fs.createReadStream('../Data/Coordinates.csv')
    .pipe(csv())
    .on('data', async (row) => {
      if (row.name in countries) {
        countries[row.name] = {
          lon: row.Longitude,
          lat: row.Latitude,
        };
      }
    })
    .on('end', function() {
        console.log('Done getting coords!');
        putCoords();
    });
}

const putCoords = function() {
  fs.createReadStream('../Data/Country.csv')
    .pipe(csv())
    .on('data', (data) => {
      let myCountry = countries[data.Country];
      data.lon = myCountry.lon;
      data.lat = myCountry.lat;
      console.log(data);
      dataArray.push(data);
    })
    .on('end', function() {
        let result = new Json2csvParser({ fields: Object.keys(dataArray[0]) });
        let csv = result.parse(dataArray);
        fs.writeFileSync('../Data/newCountry.csv', csv);
        console.log('Done throwing stuff in new csv!');
  });
}


module.exports = {
  readCountries: async function() {
    await getCountries();
  }
}
