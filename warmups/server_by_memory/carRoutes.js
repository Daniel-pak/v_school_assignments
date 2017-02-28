var express = require('express')
var carRoutes = express.Router()
var Car = require('./models/carModel')

carRoutes.get('/', function(req, res) { 
    Car.find(function(err, cars) { 
        if (err) return res.status(500).send(err)
        res.send(cars)
    })
})

carRoutes.get('/:id', function(req, res) { 
    Car.findById(req.params.id, function(err, car) { 
        if (err) return res.status(500).send(err)
        res.send(car)
    })
})

carRoutes.post('/', function(req, res) { 
    var newCar = new Car(req.body)
    
    newCar.save(function(err, new_car) { 
        if (err) return res.status(500).send(new_car)
        res.send(new_car)
    })
})

carRoutes.put('/:id', function(req, res) { 
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedCar) { 
        if(err) return res.status(500).send(err)
        res.send(updatedCar)
    })
})

carRoutes.delete("/:id", function(req, res) { 
    Car.FindByIdAndRemove(req.params.id, function(err) { 
        if(err) return res.status(500).send(err)
        res.status(200).send({
            message: "You're item has been successfully deleted!"
        })
    })
})

module.exports = carRoutes 