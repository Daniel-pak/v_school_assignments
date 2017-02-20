var express = require("express");
var recipesRoutes = express.Router();
var request = require("request");

recipesRoutes.get("/food", function (req, res) {

    request("http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653", function (error, response, body) {
            res.send(body);
        })
        //    request("http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653&q=shredded%20chicken", function (error, response, body) {
        //        res.send(body);
        //    })
})

recipesRoutes.get("/food/:id", function (req, res) {

    var id = req.params.id

    request(`http://food2fork.com/api/get?key=6d05eac0a6714496324f866d0f413653&rId=${id}`, function (error, response, body) {
        res.send(body);
    })

})

recipesRoutes.get("/home/:type", function (req, res) {
    var type = req.params.type;

    request(`http://food2fork.com/api/search?key=6d05eac0a6714496324f866d0f413653&q=${type}`, function (error, response, body) {
        res.send(body);
    })

})

module.exports = recipesRoutes;