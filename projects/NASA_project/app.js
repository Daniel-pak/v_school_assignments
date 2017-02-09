angular.module("NASAApplication", ['ngRoute', 'geolocation'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/daily', {
            controller: 'DailyController',
            templateUrl: 'daily/daily.html'
        })
        .when('/neo', {
            controller: 'NeoController',
            templateUrl: 'neo/neo.html'
        })
        .when('/earth', {
            controller: "EarthController",
            templateUrl: "earth/earth.html"
        })
})