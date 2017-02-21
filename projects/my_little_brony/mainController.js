angular.module("BronyCentralApp", [])

.controller("MainController", ["$scope", "PonyService", function($scope, PonyService){ 

    $scope.boolean = true;
    
    $scope.submitPony = function(pony) { 
        PonyService.validatePony(pony)
    }

}])