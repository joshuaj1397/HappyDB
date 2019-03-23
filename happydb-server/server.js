const express = require('express')
const app = express()
const port = 3005

const Sequelize = require('sequelize');

const database = process.env.database;
const dbUsername = process.env.dbUsername;
const dbPassword = process.env.dbPassword;

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`I'll be right by your side till ${port}`))
