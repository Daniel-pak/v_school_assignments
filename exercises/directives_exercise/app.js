angular.module("DirectivesApp", ['ngRoute'])

.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            controller: "MainTechController",
            templateUrl: "route-folders/mainTech/mainTech.html"
        })
        .when('/secondary', {
            controller: "SecondaryTechController", 
            templateUrl: "route-folders/secondaryTech/secondaryTech.html"
        })

})