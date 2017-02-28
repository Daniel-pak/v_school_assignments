var express = require("express")
var personRoutes = express.Router(); 
var Person = require('./models/personModel')

personRoutes.get('/', function(req, res) { 
    Person.find(function(err, people) { 
        if (err) return res.status(500).send(err)
        res.send(people)
    })
})

personRoutes.get('/:id', function(req, res) { 
    Person.findById(req.params.id, function(err, person) { 
        if (err) return res.status(500).send(err)
        res.send(person)
    })
})

personRoutes.post('/', function(req, res) { 
    var newPerson = new Person(req.body)
    
    newPerson.save(function(err, new_person) { 
        if (err) return res.status(500).send(err)
        res.send(new_person)
    })
})

personRoutes.put("/:id", function(req, res) { 
    Person.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, person) { 
        if(err) return res.status(500).send(err)
        res.send(person)
    })
})

personRoutes.delete('/:id', function(req, res) { 
    Person.findByIdAndRemove(req.params.id, function(err){ 
        if (err) return res.status(500).send(err)
        res.status(200).send({
            message: "Your item has been succesfully deleted"
        })
    })
})

module.exports = personRoutes