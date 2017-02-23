angular.module("BronyCentralApp")

.controller("MyFavoritesController", ["$scope", "PonyService", function ($scope, PonyService) {

    PonyService.getMyPonies().then(function (response) {
        $scope.allMyPonies = response.data;
        console.log($scope.allMyPonies);
    })
    
    $scope.deletePony = function(index) { 
        var id = $scope.allMyPonies[index]._id
        PonyService.deletePony(id).then(function(response) {
            console.log(response);
        })
        $scope.allMyPonies.splice(index, 1);
    }

}])