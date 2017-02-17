var express = require("express");
var votingRoutes = express.Router(); 
var uuidV4 = require("uuid/v4");

var topics = [ 
    {
        topic: "ACLU and Trump",
        description: "ACLU racks up $24.1 million in donations over weekend: Does the ACLU stand a chance in court against Trump's ban on travel for 7 Muslim nations?", 
        upvote: 10,
        comments: ["Trump is shiet"], 
        id: "123098049380"
    },
    {
        topic: "ACLU and Trump",
        description: "ACLU racks up $24.1 million in donations over weekend: Does the ACLU stand a chance in court against Trump's ban on travel for 7 Muslim nations?", 
        upvote: 9,
        comments: ["Trump is shiet"], 
        id: "12309849380"
    }
]


votingRoutes.get('/topics', function(req, res) { 
    res.send(topics);
})

votingRoutes.post('/topics', function(req, res) { 
    req.body.id = uuidV4();
    console.log(req.body)
    topics.push(req.body);
    
    res.send(req.body);
})

votingRoutes.put("/topics/:id", function(req, res) { 
    var topicId = req.params.id; 
    for (var i = 0; i < topics.length; i++) { 
        if (topics[i].id === topicId) { 
            topics[i] = req.body;
            res.send(res.body);
        }
    }
    res.status(500).send({message: "Error on our server cause we suck! Sowwy!"})
})





module.exports = votingRoutes;