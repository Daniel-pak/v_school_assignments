var app = angular.module("MyApplication", []);

app.controller("MainController", ["$scope", "HTTPService", function ($scope, HTTPService) {

    
    HTTPService.getImages().then(function(response) { 
        console.log(response.data)
        $scope.images = response.data;
    })
    
}]);