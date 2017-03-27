angular.module("MyPortfolioApplication")

    .controller("PortfolioController", ["$scope", '$window', function ($scope, $window) {

        $scope.pageClass = "page-portfolio"

        $scope.liveLink = function (port) {
            $window.open(`http://45.55.225.168:${port}/#/home`, '_blank');
        }

}])
