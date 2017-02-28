var mongoose = require("mongoose")
var schema = mongoose.Schema

var Person = new schema({
    name: String,
    carsOwned: {
        type: schema.Types.ObjectId,
        ref: "Car"
    }
})

module.exports = mongoose.model("Person", Person)