var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.array = [];


    $scope.submit = function (object) {

        var item = {
            name: object.name,
            image: object.ImgURL,
            comment: [object.comment]
        }

        $scope.array.push(item);

        $scope.item = {};
    }

    $scope.addComment = function (index, thing) {

        $scope.array[index].comment.push(thing.newComment);
        
        delete thing.newComment;

    }

    $scope.delete = function (index) {
        $scope.array.splice(index, 1);
    }

    $scope.deleteComment = function (inner, outer) {
        $scope.array[outer].comment.splice(inner, 1);
    }


}])