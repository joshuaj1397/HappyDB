const express = require('express')
const mutate = require('./mutateData.js')
const path = require('path')
const app = express()
const port = 3005
var Connection = require('tedious').Connection
var Request = require('tedious').Request

var config = {
  server: process.env.server,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.username,
      password: process.env.password,
    },
  },
  options: {
    instanceName: process.env.instance,
    database: 'Happy',
    rowCollectionOnRequestCompletion: true,
    useColumnNames: true,
    encrypt: false,
  },
}

app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/mutateData', (req, res) => {
  mutate.readCountries()
})

function pruneCountryRegion(data) {
  data.forEach(function(column) {
    for (prop in column) {
      delete column[prop].metadata
    }
  })
  return data[0].Name
}

function pruneData(data) {
  data.forEach(function(column) {
    for (prop in column) {
      delete column[prop].metadata
    }
  })
  return data[0]
}

// get 2015data by country name
app.get('/2015data/:countryName', function(req, res) {
  dataPromise = execSql(
    `SELECT * FROM HappyData WHERE DataYear = 2015 AND countryId IN (SELECT ID FROM Country WHERE Name = '${
      req.params.countryName
    }')`,
  )
  dataPromise.then(
    function(result) {
      data = pruneData(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

// get 2016data by country name
app.get('/2016data/:countryName', function(req, res) {
  dataPromise = execSql(
    `SELECT * FROM HappyData WHERE DataYear = 2016 AND countryId IN (SELECT ID FROM Country WHERE Name = '${
      req.params.countryName
    }')`,
  )
  dataPromise.then(
    function(result) {
      data = pruneData(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

// get 2017data by country name
app.get('/2017data/:countryName', function(req, res) {
  dataPromise = execSql(
    `SELECT * FROM HappyData WHERE DataYear = 2017 AND countryId IN (SELECT ID FROM Country WHERE Name = '${
      req.params.countryName
    }')`,
  )
  dataPromise.then(
    function(result) {
      data = pruneData(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

// get country by id
app.get('/country/:countryId', function(req, res) {
  dataPromise = execSql(
    `SELECT Name FROM Country WHERE ID = '${req.params.countryId}'`,
  )
  dataPromise.then(
    function(result) {
      data = pruneCountryRegion(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

// get region by id
app.get('/region/:regionId', function(req, res) {
  dataPromise = execSql(
    `SELECT Name FROM Region WHERE ID = '${req.params.regionId}'`,
  )
  dataPromise.then(
    function(result) {
      data = pruneCountryRegion(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

// get all countries
app.get('/countries', function(req, res) {
  dataPromise = execSql(`SELECT * FROM Country`)
  dataPromise.then(
    function(result) {
      data = pruneCountryRegion(result)
      cb = res.send.bind(res)
      cb({ data })
    },
    function(err) {
      console.log(err)
    },
  )
})

app.listen(port, () => console.log(`I'll be right by your side till ${port}`))

// make a sql reauest
function execSql(sqlString) {
  return new Promise(function(resolve, reject) {
    console.log(sqlString)
    var connection = new Connection(config)
    var request = new Request(sqlString, function(err, rowCount, rows) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(rows)
      }
    })

    connection.on('connect', function(err) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        connection.execSql(request)
      }
    })
  })
}
