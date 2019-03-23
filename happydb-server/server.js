const express = require('express')
const app = express()
const port = 3005

const Connection = require('tedious').Connection;

const config = {
  server = process.env.server;
  database = process.env.database;
  dbUsername = process.env.dbUsername;
  dbPassword = process.env.dbPassword;
}

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`I'll be right by your side till ${port}`))
