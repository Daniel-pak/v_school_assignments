angular.module("NASAApplication")

.controller("MarsController", ["$scope", "HTTPService", function($scope, HTTPService){
    
    HTTPService.getRover().then(function(response) { 
        $scope.curiosity = response.data.photos
        console.log($scope.curiosity);
    })
    
}]);