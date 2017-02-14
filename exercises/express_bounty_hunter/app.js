var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const uuidV4 = require('uuid/v4');
//var uuid = require("uuid);
app.use(bodyParser.json())

app.listen(4000, function () {
    console.log("Server on and fully functioning *Whoooshhh*")
})

var bounty = [];

app.get('/bounty', function (req, res) {

    res.send(bounty)

})

//app.post("/bounty", function (req, res) {
//    bounty.push({
//        id: uuidV4(),
//        data: req.body
//    });
//    res.send(bounty)
//})

app.post("/bounty", function (req, res) {
    req.body.id = uuidV4();
    bounty.push(req.body);
    res.send(bounty);
})