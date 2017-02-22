var express = require("express");
var Bounty = require("../models/bounty")
var bountyRoutes = express.Router();


bountyRoutes.get('/bounty', function (req, res) {
    Bounty.find(function (err, bounty) {
        if (err) {
            res.status(500).send(err);
        }
        res.send(bounty);
    })
})

bountyRoutes.post("/bounty", function (req, res) {
    var newBounty = new Bounty(req.body)
    newBounty.save(newBounty, function (err, bounty) {
        if (err) {
            res.status(500).send(err);
        }
        res.send(bounty)
    })
})

bountyRoutes.get('/bounty/:id', function (req, res) {
    Bounty.findById(req.params.id, function (err, bounty) {
        if (err) res.status(500).send(err);
        res.send(bounty);
    })
})

bountyRoutes.put('/bounty/:id', function (req, res) {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true},function (err, bounty) {
        if (err) res.status(500).send(err);
        res.send(bounty)
    })
})

bountyRoutes.delete('/bounty/:id', function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err) {
        if (err) res.status(500).send(err);
        res.send({
            message: "Your item was succesfully deleted"
        })
    })
})

module.exports = bountyRoutes;