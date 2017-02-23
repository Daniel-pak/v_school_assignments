var express = require("express");
var votingRoutes = express.Router(); 
var VotingTopics = require("./models/votingModel");

votingRoutes.get('/topics', function(req, res) { 
    VotingTopics.find(function(err, topics) { 
        if (err) res.status(500).send(err);
        res.send(topics);
    })
})

votingRoutes.post('/topics', function(req, res) { 
    var newTopic = new VotingTopics(req.body);
    
    newTopic.save(function(err, newtopic) { 
        if (err) res.status(500).send(err);
        res.send(newtopic);
    })
})

votingRoutes.put("/topics/:id", function(req, res) { 
    VotingTopics.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedTopic) { 
        if (err) res.status(500).send(err);
        res.send(updatedTopic);
    })
})

votingRoutes.delete("/topics/:id", function(req, res) { 
    VotingTopics.findByIdAndRemove(req.params.id, function(err, topic) { 
        if(err) res.status(500).send(err);
        res.send({message: "Successfully deleted item"})
    })
})





module.exports = votingRoutes;