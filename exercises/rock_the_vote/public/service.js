angular.module("MyApp")

.service("VotingService", ["$http", function ($http) {

    this.url = "http://localhost:8000/topics"
    this.url2 = "http://localhost:8000/topics/"
    this.getVotes = function () {
        return $http.get(this.url)
    }

    this.addComment = function (id, object) {
        return $http.put(this.url2 + id, object)
    }

    this.addTopic = function (topic) {
        return $http.post(this.url, topic)
    }

    this.upvote = function (id, object) {
        return $http.put(this.url2 + id, object)
    }
    this.downvote = function (id, object) {
        return $http.put(this.url2 + id, object)
    }
    
    this.deleteItem = function(id) { 
        return $http.delete(this.url2 + id)
    }


}])