angular.module("BronyCentralApp")

.controller("HomeController", ["$scope", "PonyService", function ($scope, PonyService) {

    $scope.submitPony = function (pony) {
        PonyService.validatePony(pony)
        $scope.newPony = {};
    };

}])