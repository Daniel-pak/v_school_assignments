angular.module("MyPortfolioApplication")

.directive("emailMe", function () {
    return {
        restrict: "EA",
        scope: {},
        templateUrl: "directives/emailMe.html"
//        link: function (element, attrs) {
//            element.on("hover", function (event) {
//                element.css({
//                    backgroundColor: '#D7DADB',
//                    borderRadius: '3px',
//                    opacity: ".8",
//                    width: "25%",
//                    float: "right",
//                    height: "35px",
//                    bottom: "0px",
//                    transition: "all.5s ease",
//                })
//            })
        }
    })