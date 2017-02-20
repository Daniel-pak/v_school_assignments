angular.module("RecipeApp")

.controller("TopRatedController", ["$scope", "GetFood", "PassFood", function ($scope, GetFood, PassFood) {

    GetFood.topRatedFood()
        .then(function (response) {
            console.log(response.data);
            $scope.hotRecipes = response.data.recipes
        })

    $scope.getThisRecipe = function (index) {
        var recipeId = $scope.hotRecipes[index].recipe_id
        PassFood.savingRID(recipeId);
        } 



}]);