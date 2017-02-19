angular.module("RecipeApp")

.service("GetFood", ["$http", "$sce", function ($http, $sce) {

    this.topRatedFood = function () {
        return $http.get("/food");
    }
    
    this.thisRecipe = function(rId) { 
        return $http.get(`/food/${rId}`);
    }
}])