var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var port = process.env.PORT || 8000
var path = require('path')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))

mongoose.connect('mongodb://localhost/maps', function(err) { 
    console.log("connected to database")
})






app.listen(port, function() { 
    console.log("server up and running")
})