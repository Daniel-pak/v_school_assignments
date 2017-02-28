var mongoose = require('mongoose')
var schema = mongoose.Schema;

var Car = new schema({
    make: { 
        type: String, 
        required: true
    },
    model: { 
        type: String, 
        required: true
    }, 
    year: { 
        type: Number, 
        required: true
    }, 
    engine: String,
    miles: { 
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model("Car", Car)