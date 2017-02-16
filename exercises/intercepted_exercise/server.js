var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var change = require('./change')

app.use(bodyParser.json())

app.use(change);

app.get('/', function(req,res) { 
    res.send(req.body);
})



app.listen(8000, function() { 
    console.log("Server powering on... \n... \n... \n... On and fully functioning!")
})