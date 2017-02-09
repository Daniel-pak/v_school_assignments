angular.module("MyCartoonApp", [])

.controller("MainController", ["$scope", "cartoonService", function ($scope, cartoonService) {

    $scope.characters = cartoonService.cartoons;

    $scope.addCharacters = function (character) {

        cartoonService.addCharacter(character);
        $scope.newCharacter.name = "";
        $scope.newCharacter.url = "";
        $scope.newCharacter.description = "";
    }

}]);