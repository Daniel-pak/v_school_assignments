angular.module("MyApp", [])

.controller("MainController", ["$scope", "VotingService", function ($scope, VotingService) {

    VotingService.getVotes().then(function (response) {
        $scope.arrayOfTopics = response.data;
        console.log($scope.arrayOfTopics);
    })

    $scope.add = false;

    $scope.comment = false;

    $scope.submitComment = function (comment, index) {
        var id = $scope.arrayOfTopics[index].id
        $scope.arrayOfTopics[index].comments.push(comment);
        VotingService.addComment(id, $scope.arrayOfTopics[index])
        console.log(id);
    }

    $scope.addVote = function (index) {
        var id = $scope.arrayOfTopics[index].id
        $scope.arrayOfTopics[index].upvote += 1;
        VotingService.upvote(id, $scope.arrayOfTopics[index]).then(function (response) {
            console.log(response)
        });
        console.log(id);

    }

    $scope.takeVote = function (index) {
        var id = $scope.arrayOfTopics[index].id
        $scope.arrayOfTopics[index].upvote -= 1;
        VotingService.upvote(id, $scope.arrayOfTopics[index]).then(function (response) {
            console.log(response)
        });
        console.log(id);
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


}])