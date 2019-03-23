const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`I'll be right by your side till ${port}`))
