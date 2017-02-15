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

app.listen(8000, function () {
    console.log("Server on and fully functioning *Whoooshhh*")
})

var bounty = [
    {
        "firstName": "Jabba",
        "lastName": "Hutt",
        "price": 100000,
        "isAlive": "true",
        "type": "Sith",
        "id": "fc48b078-0055-4604-b03e-73fa0d933995"
    }
];

app.get('/bounty', function (req, res) {
    res.send(bounty)
})

app.get('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.id) {
            return res.send(bounty[i])
        }
    }
    res.status(420).send({
        message: "Not found"
    })
})

app.post("/bounty", function (req, res) {
    req.body.id = uuidV4();
    bounty.push(req.body);
    res.send(req.body);
})

app.put('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.id) {
            bounty[i] = req.body
        }
    }
    res.send({
        message: "Edit performed successfully"
    })
})

app.delete('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.id) {
            bounty.splice(i, 1);
            res.send({
                message: "Your item has been deleted!"
            })
        }
    }
    res.status(404).send({
        message: "Not found"
    })
})