angular.module("MyApp", [])

.controller("MainController", ["$scope", "VotingService", function ($scope, VotingService) {

    $scope.add = false;
    $scope.comment = false;

    VotingService.getVotes().then(function (response) {
        $scope.arrayOfTopics = response.data;
        console.log($scope.arrayOfTopics);
    })

    $scope.submitComment = function (comment, index) {
        var id = $scope.arrayOfTopics[index]._id
        $scope.arrayOfTopics[index].comments.push(comment);
        VotingService.addComment(id, $scope.arrayOfTopics[index]).then(function (response) {
            $scope.arrayOfTopics[index] = response.data;
        })
    }

    $scope.addVote = function (index) {
        var id = $scope.arrayOfTopics[index]._id;
        $scope.arrayOfTopics[index].upvote += 1;
        VotingService.upvote(id, $scope.arrayOfTopics[index]).then(function (response) {
            console.log(response.data)
        })
    }

    $scope.takeVote = function (index) {
        var id = $scope.arrayOfTopics[index]._id;
        $scope.arrayOfTopics[index].upvote -= 1;
        VotingService.upvote(id, $scope.arrayOfTopics[index]).then(function (response) {
            console.log(response.data)
        })
    }

    $scope.addTopic = function (topic) {
        var topicItem = {
            title: topic.title,
            description: topic.description,
            comments: [topic.comment],
            upvote: 0
        }

        VotingService.addTopic(topicItem).then(function (response) {
            $scope.arrayOfTopics.push(response.data);
        })
    }

    $scope.deleteItem = function (index) {
        var id = $scope.arrayOfTopics[index]._id;
        VotingService.deleteItem(id).then(function (response) {
            console.log(response);
        })
        $scope.arrayOfTopics.splice(index, 1);
    }


}])