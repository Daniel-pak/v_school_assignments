angular.module("NASAApplication")

.controller("NeoController", ["$scope", "HTTPService", function($scope, HTTPService){
    
    HTTPService.getNEO().then(function(object){
        $scope.neo = object;
        console.log(object)
    })
    
}])