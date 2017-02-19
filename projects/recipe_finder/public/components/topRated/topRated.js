angular.module("RecipeApp")

.controller("TopRatedController", ["$scope", "GetFood", "PassFood", function ($scope, PassFood, GetFood) {

    GetFood.topRatedFood()
        .then(function (response) {
            console.log(response.data);
            $scope.hotRecipes = response.data.recipes
        })

    $scope.getThisRecipe = function (index) {
        var recipeId = $scope.hotRecipes[index].recipe_id
        
        } 



}]);