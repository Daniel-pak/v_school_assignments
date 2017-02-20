angular.module("RecipeApp")

.controller("ThisRecipeController", ["$scope", "PassFood", "GetFood", function ($scope, PassFood, GetFood) {

    var recipeId = PassFood.passRID()
    
    GetFood.thisRecipe(recipeId).then(function (response) {
        $scope.thisRecipe = response.data.recipe;
        console.log($scope.thisRecipe);
    })


}])