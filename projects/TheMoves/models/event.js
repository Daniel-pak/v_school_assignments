var mongoose = require("mongoose");
var schema = mongoose.Schema;

var eventSchema = new schema({
    title: String,
    price: Number,
    date: String,
    location: String, 
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business"
    }
})

modules.export = mongoose.model("Event", eventSchema)