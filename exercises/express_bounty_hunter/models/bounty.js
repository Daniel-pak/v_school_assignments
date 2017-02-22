var mongoose = require("mongoose")

var BountySchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    price: Number, 
    isAlive: Boolean, 
    type: String
})

var Bounty = mongoose.model("Bounty", BountySchema);

module.exports = Bounty;