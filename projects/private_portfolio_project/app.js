angular.module("MyPortfolioApplication", ["ngRoute", 'ngAnimate'])

.controller("MainController", ["$scope", "$window", function ($scope, $window) {

    $scope.clicked = false;

    var subject = "";
    
    $scope.sendEmail = function (message) {
        $window.open("mailto:" + "PakJuhnMan@gmail.com" + "?subject=" + subject + "&body=" +message, "_self");
    }


}])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            controller: "HomeController",
            templateUrl: "home/home.html"
        })
        .when("/portfolio", {
            controller: "PortfolioController",
            templateUrl: "portfolio/portfolio.html"
        })
        .when("/about", {
            controller: "AboutController",
            templateUrl: "about/about.html"
        })
        .when("/skills", {
            controller: "SkillsController",
            templateUrl: "skills/skills.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])