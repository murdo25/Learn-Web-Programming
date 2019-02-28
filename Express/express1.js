const express = require('express')
const app = express()
const port = 8080


let response = "Hello World! This is super cool!!!"


app.get('/', (req, res) => res.send(response))
// app.get('/', (req, res) => res.send('Well this is super cool.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
