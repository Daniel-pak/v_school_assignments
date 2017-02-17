var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
app.use(express.static(path.join(__dirname, "public")))



app.use(bodyParser.json());


app.use(require("./votingRoutes"));


app.listen(8000, function () {
    console.log("Voting server booting\n...\n...\n...\nOn and fully ready to take stupid political talking points into account!")
})