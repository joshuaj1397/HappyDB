const express = require('express');
const mutate = require('./mutateData.js');
const app = express();
const port = 3005;
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    server: 'DESKTOP-02JLIOA',
    authentication: {
        type: 'default',
        options: {
            userName: 'test',
            password: 'asdf'
        }
    },
    options: {
        instanceName: 'SQLEXPRESS',
        database: 'Happy',
        rowCollectionOnRequestCompletion: true,
        useColumnNames: true,
        encrypt: false
    }
};


app.get('/', (req, res) => res.send('Hello World'));
app.get('/mutateData', (req, res) => { mutate.readCountries() });

// get 2015data by country name
app.get('/2015data/:countryName', function (req, res) {
    dataPromise = execSql(`SELECT * FROM HappyData WHERE DataYear = 2017 AND countryId IN (SELECT ID FROM Country WHERE Name = '${req.params.countryName}')`);
    dataPromise.then(function (result) {
        data = result;
        console.log(data)
        res.send(data)
    }, function (err) {
        console.log(err);
    })
})

// get 2016data by country name
app.get('/2016data/:countryName', function (req, res) {
    dataPromise = execSql(`SELECT * FROM HappyData WHERE DataYear = 2017 AND countryId IN (SELECT ID FROM Country WHERE Name = '${req.params.countryName}')`);
    dataPromise.then(function (result) {
        data = result;
        console.log(data)
        res.send(data)
    }, function (err) {
        console.log(err);
    })
})

// get 2017data by country name
app.get('/2017data/:countryName', function (req, res) {
    dataPromise = execSql(`SELECT * FROM HappyData WHERE DataYear = 2017 AND countryId IN (SELECT ID FROM Country WHERE Name = '${req.params.countryName}')`);
    dataPromise.then(function (result) {
        data = result;
        console.log(data)
        res.send(data)
    }, function (err) {
        console.log(err);
    })
})

// get country by id
app.get('/country/:countryId', function (req, res) {
    dataPromise = execSql(`SELECT Name FROM Country WHERE ID = '${req.params.countryId}'`)
    dataPromise.then(function (result) {
        data = result;
        console.log(data)
        res.send(data)
    }, function (err) {
        console.log(err);
    })
})

// get region by id
app.get('/region/:regionId', function (req, res) {
    dataPromise = execSql(`SELECT Name FROM Region WHERE ID = '${req.params.regionId}'`)
    dataPromise.then(function (result) {
        data = result;
        console.log(data)
        res.send(data)
    }, function (err) {
        console.log(err);
    })
})


app.listen(port, () => console.log(`I'll be right by your side till ${port}`));

// make a sql reauest
function execSql(sqlString) {
    return new Promise(function (resolve, reject) {
        console.log(sqlString)
        var connection = new Connection(config);
        var response;
        var request = new Request(sqlString, function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(rowCount + ' rows');
                console.log(rows);
                response = rows;
            }
        });

        connection.on('connect', function (err) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                connection.execSql(request);
            }
        })

        request.on('done', function () {
            connection.close();
            resolve(response);
        })
    })
}