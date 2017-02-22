angular.module("MyApp", [])

.controller("MainController", ["$scope", "BountyService", function ($scope, BountyService) {

    $scope.list = [];
    
    $scope.edit = true;

    BountyService.getBountyList().then(function (response) {
        $scope.list = response.data;
        console.log($scope.list);
    });

    $scope.submit = function (object) {
        BountyService.submitNewBounty(object).then(function (response) {
            $scope.list.push(response.data);
            console.log(response.data);
            $scope.newBounty = {};
        })
    }

    $scope.delete = function (index) {
        var idNumber = $scope.list[index]._id
        $scope.list.splice(index, 1);
        BountyService.deleteBounty(idNumber).then(function (response) {
            console.log(response)
        });
    }

    $scope.editItem = function (index, object) {
        var idNumber = $scope.list[index]._id;
        BountyService.editBounty(idNumber, object).then(function(response) { 
            console.log(response);
        })
    }
}])