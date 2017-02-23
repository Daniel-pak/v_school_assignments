angular.module("BronyCentralApp", ['ngRoute'])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/myFavorites", {
            templateUrl: "myFavorites/myFavorites.html",
            controller: "MyFavoritesController"
        })
        .otherwise({ 
            redirectTo: "/home"
        })

}])