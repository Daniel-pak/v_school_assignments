var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/places", function(err){ 
    if (err) console.log(err)
    console.log("Connected to the Database boss!")
})


app.listen(port, function() { 
    console.log("Server running on " + port);
})

