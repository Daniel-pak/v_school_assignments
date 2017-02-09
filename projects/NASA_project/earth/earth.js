angular.module("NASAApplication")

.controller("EarthController", ["$scope", "HTTPService", function ($scope, HTTPService) {
    
        HTTPService.getLocation()
            .then(function(response) { 
                console.log(response)
                $scope.earthPhoto = response.data;
        })

    }

])