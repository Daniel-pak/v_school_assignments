var express = require("express");
var uuid = require("uuid/v4");
var todoRoutes = express.Router();

var todos = [
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": "23k4lh23h2",
    },
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": "2398fh23h2",
    },
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        "_id": "oewiurowe2",
    }
];

todoRoutes.get('/', function (req, res) {
    res.send(todos);
});

todoRoutes.get('/:id', function (req, res) {
    var todoId = req.params.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === todoId) {
            res.send(todos[i])
        }
    }
    res.status(404).send({
        message: "Thing not found! Please check your id number!"
    })

    //    console.log(todoId);
});

todoRoutes.post('/', function (req, res) {
    req.body._id = uuid();
    todos.push(req.body);
    res.send(req.body);
});

todoRoutes.put('/:id', function (req, res) {
    var todoId = req.params.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === todoId) {
            todos[i] = req.body 
            res.send(req.body)
        }
    }
    res.status(404).send({
        message: "Thing not found! Please check your id number!"
    })

    //    console.log(todoId);
});

todoRoutes.delete('/:id', function (req, res) {
    var todoId = req.params.id;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === todoId) {
            todos.splice(i, 1);
            res.status(200).send({
                message: "Thing deleted!"
            })
        }
    }
    res.status(404).send({
        message: "Thing not found... please check your id - stupid."
    })

});

module.exports = todoRoutes;