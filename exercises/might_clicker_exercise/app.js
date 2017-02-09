angular.module("myClicker", [])

.controller("MainController", ["$scope", "RedService", "BlueService", function ($scope, RedService, BlueService) {
    
    $scope.redPoints = RedService.point;

    $scope.redIncrement = function () {
        RedService.increment();
        $scope.redPoints = RedService.point;

        BlueService.decrement();
        $scope.bluePoints = BlueService.point;
    }

    $scope.bluePoints = BlueService.point;

    $scope.blueIncrement = function () {
        BlueService.increment();
        $scope.bluePoints = BlueService.point;

        RedService.decrement();
        $scope.redPoints = RedService.point;
    }

}])