angular.module("RecipeApp")

.controller("MyRecipesController", ["$scope", "GetFood", function($scope, GetFood) { 
    
    GetFood.myRecipes().then(function(response){ 
        $scope.myRecipes = response.data;
    })
    
    $scope.deleteRecipeItem = function(index) { 
        var id = $scope.myRecipes[index].recipe_id;
        GetFood.deleteThisRecipe(id).then(function(response){ 
            console.log(response);
        })
        $scope.myRecipes.splice(index, 1);
    }
    
}])