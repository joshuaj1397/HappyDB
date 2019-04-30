const express = require('express');
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
        database: 'TestDatabase',
        rowCollectionOnRequestCompletion: true,
        useColumnNames: true,
        encrypt: false
    }
};


app.get('/', (req, res) => res.send('Hello World'));

// get 2015data by country name
app.get('/2015data/:countryName', function (req, res) {
    row = execSql(`SELECT * FROM TestTable WHERE colfour='${req.params.countryName}'`);
    res.send(row)
})

// get 2016data by country name
app.get('/2016data/:countryName', function (req, res) {
    row = execSql(`SELECT * FROM 2016data WHERE country='${req.params.countryName}'`);
    res.send(row)
})

// get 2017data by country name
app.get('/2017data/:countryName', function (req, res) {
    row = execSql(`SELECT * FROM 2017data WHERE country='${req.params.countryName}'`);
    res.send(row)
})

app.listen(port, () => console.log(`I'll be right by your side till ${port}`));

// make a sql reauest
function execSql(sqlString) {
    var connection = new Connection(config);
    var response;
    var request = new Request(sqlString, function (err, rowCount, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + 'rows\n');
            console.log(rows);
            response = rows;
        }
    });

    connection.on('connect', function (err) {
        if (err) {
            console.log(err)
        } else {
            connection.execSql(request);
            request.on('done', function () {
                connection.close();
            })
        }
    })

    return response;
}