var app = angular.module("myServices", []);

app.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {


    $scope.pokemon = pokeService.favoritePokemon;


    $scope.addPokemon = function (pokemon) {
        pokeService.addPokemon(pokemon)
        $scope.newPokemon = "";
    }

    $scope.removePokemon = function (pokemon) {
        pokeService.removePokemon(pokemon)
        $scope.newPokemon = "";
    }

}]);