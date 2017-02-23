var mongoose = require("mongoose");

var VotingSchema = new mongoose.Schema({ 
    title: String, 
    description: String, 
    upvote: Number, 
    comments: [String]
});

var VotingTopic = mongoose.model("Topic", VotingSchema);

module.exports = VotingTopic;