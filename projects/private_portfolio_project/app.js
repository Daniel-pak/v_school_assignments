angular.module("MyPortfolioApplication", ["ngRoute", 'ngAnimate', "ui.bootstrap"])

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
        .when("/contact", {
            controller: "ContactController",
            templateUrl: "contact/contact.html"
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