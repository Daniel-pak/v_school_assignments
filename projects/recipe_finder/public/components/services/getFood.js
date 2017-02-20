angular.module("RecipeApp")

.service("GetFood", ["$http", function ($http) {

    this.topRatedFood = function () {
        return $http.get("/food");
    }
    
    this.thisRecipe = function(rId) { 
        return $http.get(`/food/${rId}`);
    }
    
    this.returnTypeRecipes = function(type) { 
        return $http.get(`/home/${type}`);
    }
    
    this.addRecipeToMyList = function() { 
        
    }
    
}])