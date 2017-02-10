angular.module("NASAApplication")

.controller("DailyController", ["$scope", "HTTPService", function ($scope, HTTPService) {

    HTTPService.getPicture().then(function (object) {
        $scope.picture = object;
    })
    
    var song = document.getElementById("background-music");
    song.play();

}])


