var express = require("express");
var uuidV4 = require("uuid/v4");
var bountyRoutes = express.Router();

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

bountyRoutes.get('/bounty', function (req, res) {
    res.send(bounty)
})

bountyRoutes.get('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.id) {
            return res.send(bounty[i])
        }
    }
    res.status(420).send({
        message: "Not found"
    })
})

bountyRoutes.post("/bounty", function (req, res) {
    req.body.id = uuidV4();
    bounty.push(req.body);
    res.send(req.body);
})

bountyRoutes.put('/bounty/:id', function (req, res) {
    for (var i = 0; i < bounty.length; i++) {
        if (bounty[i].id === req.params.id) {
            bounty[i] = req.body
        }
    }
    res.send({
        message: "Edit performed successfully"
    })
})

bountyRoutes.delete('/bounty/:id', function (req, res) {
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

module.exports = bountyRoutes;