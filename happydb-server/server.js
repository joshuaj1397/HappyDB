const express = require('express');
const mutate = require('./mutateData.js');
const app = express();
const port = 3005;

app.get('/', (req, res) => res.send('Hello World'));
app.get('/mutateData', (req, res) => { mutate.readCountries() });

app.listen(port, () => console.log(`I'll be right by your side till ${port}`));
