var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect("mongodb://localhost/votesDB", function(err) { 
    if(err) { 
        throw err;
    }
    console.log("Connected to DataBase")
})

app.use(bodyParser.json());


app.use(require("./votingRoutes"));


app.listen(8000, function () {
    console.log("Voting server booting\n...\n...\n...\nOn and fully ready to take stupid political talking points into account!")
})