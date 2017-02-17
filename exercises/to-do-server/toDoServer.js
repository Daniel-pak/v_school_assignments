var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid/v4")
var todoRouter = require("./router");

app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.listen(9000, function () {

    console.log("Please enjoy the DBZ reference ----- RAWR")

});

