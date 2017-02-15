var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(4800, function () {
    console.log("Server online and ready for process rendering... *beep boop*")
})

var arrayOfThings = [
    {
        name: "Banana",
        type: "Fruit"
    },
    {
        name: "Pants",
        type: "Clothes"
    },
    {
        name: "Coffe",
        type: "Beverage"
    }
]

app.get("/thing", function (req, res) {

    var search = []
    var searchQuery = Object.keys(req.query);
    if (searchQuery.length > 0) {
        for (var i = 0; i < arrayOfThings.length; i++) {
            if (req.query[searchQuery] === arrayOfThings[i][searchQuery]) {
                search.push(arrayOfThings[i]);
            }
        }
        res.send(search);
    } else { 
        res.send(arrayOfThings);
    }

})