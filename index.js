require('./db')
const express = require('express')
const bodyParser= require('body-parser')

var postMessageRoutes = require('./controller/postMessageController')
var app = express()
app.use(bodyParser.json())


app.use('/postMessages',postMessageRoutes)

app.listen(5000,()=>console.log('Server started at: 5000'))