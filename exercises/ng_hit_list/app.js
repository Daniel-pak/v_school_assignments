var app = angular.module("MyApplication", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    $scope.images = [];

    $http.get("http://api.vschool.io:6543/hitlist.json")
        .then(function (response) {
            $scope.images.push((response.data));
            console.log(response.data);
        });
    
}]);