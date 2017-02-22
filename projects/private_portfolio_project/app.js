angular.module("MyPortfolioApplication", ["ngRoute", 'ngAnimate', "ui.bootstrap"])

.controller("MainController", ["$scope", "$window", function ($scope, $window) {

    $scope.clicked = false;
    $scope.hovered = false;

    var subject = "Hello!";
    var message = "Hello!";
    
    $scope.sendEmail = function () {
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
        //        .when("/contact", {
        //            controller: "ContactController",
        //            templateUrl: "contact/contact.html"
        //        })
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