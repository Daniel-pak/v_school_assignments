angular.module("BronyCentralApp", [])

.controller("MainController", ["$scope", "PonyService", function($scope, PonyService){ 

    $scope.boolean = true;
    
    $scope.submitPony = function(pony) { 
        PonyService.validatePony(pony)
    }

    PonyService.getMyPonies().then(function(response) { 
       $scope.allMyPonies = response.data;
    })
}]) 