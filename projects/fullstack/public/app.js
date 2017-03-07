angular.module("MapApp", ['ngRoute', "uiGmapgoogle-maps"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: "HomeController",
            templateUrl: "components/home/home.html"
        })
}])