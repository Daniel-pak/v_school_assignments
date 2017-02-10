angular.module("NASAApplication")

.controller("EarthController", ["$scope", "HTTPService", function ($scope, HTTPService) {

        $scope.earthPhoto = [];

        HTTPService.getLocation()
            .then(function (response) {
                console.log(response)
                $scope.earthPhoto.push(response.data);
                HTTPService.getEarthPhotos()
                    .then(function (response) {
                        $scope.earthPhoto.push(response.data);
                    })
            })



    }

])