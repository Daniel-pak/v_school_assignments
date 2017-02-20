angular.module("RecipeApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            controller: "HomeController",
            templateUrl: "components/home/home.html"
        })
        .when("/topRated", {
            controller: "TopRatedController",
            templateUrl: "components/topRated/topRated.html"
        })
        .when("/thisRecipe", {
            controller: "ThisRecipeController",
            templateUrl: "components/thisRecipe/thisRecipe.html"
        })
        .when("/myRecipes", { 
            controller: "MyRecipesController", 
            templateUrl: "components/myRecipes/myRecipes.html"
        })
}])