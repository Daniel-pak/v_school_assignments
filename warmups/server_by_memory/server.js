var express = require('express')
var app = express()
var port = process.env.PORT || 8000
var morgan = require('morgan')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var carRoutes = require('./carRoutes')
var personRoutes = require('./personRoutes')

mongoose.connect("mongodb://localhost/cars", function (err) {
    if (err) console.log(err)
    console.log("Connected to the database!")
})

app.use(bodyParser.json())

app.use('/cars', carRoutes)
app.use('/person', carRoutes)

app.listen(port, function () {
    console.log("Server on and functioning on port 8000")
})