var app = angular.module("MyApplication", []);

var sound = document.getElementById("sound");

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    $http.get("http://swapi.co/api/films/1/")
        .then(function(object) {
            console.log(object.data.opening_crawl);
            $scope.crawl = object.data.opening_crawl;
            
            sound.play();
            
        })

}]);

