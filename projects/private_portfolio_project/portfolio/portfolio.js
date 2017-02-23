angular.module("MyPortfolioApplication")

.controller("PortfolioController", ["$scope", function($scope){ 
    
    $scope.click1 = false;
    $scope.click2 = false;
    
    $scope.pageClass = "page-portfolio"
    
}])