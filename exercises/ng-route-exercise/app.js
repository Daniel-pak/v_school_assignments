angular.module("routingApp", ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        })
        .when('/about', {
            controller: "AboutController",
            templateUrl: 'about/about.html'
        })
        .when('/whyilove', {
            controller: "LoveController",
            templateUrl: "whyILove/whyILove.html"
        })

})