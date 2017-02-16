var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const uuidV4 = require('uuid/v4');
//var uuid = require("uuid);
var path = require("path");

//app.use(cors())
//app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public"))) //express static looking for index.html page 

app.use(require("./routes/bountyRoutes"));

app.listen(8000, function () {
    console.log("Server on and fully functioning *Whoooshhh*")
})

