angular.module("DirectivesApp")

.directive("wishList", [function () {
    return {
        restrict: "EA",
        scope: {
            "item": "&"
        },
        templateUrl: "directives/wishListDirectives.html"
    }
}])