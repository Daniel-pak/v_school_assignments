angular.module("NASAApplication")

.controller("DailyController", ["$scope", "HTTPService", function ($scope, HTTPService) {

    HTTPService.getPicture().then(function(object){
        $scope.picture = object;
    })


}])