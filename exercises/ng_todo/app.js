var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "HTTPService", function ($scope, HTTPService) {

    //LOAD TO-DO LIST ON REFRESH
    HTTPService.getToDo().then(function (object) {
        $scope.array = object.data;
    });

    //SUBMIT A NEW ITEM
    $scope.submit = function (item) {
        var newItem = {
            title: item.name,
            description: item.description,
            price: item.price,
            imgUrl: item.url,
            completed: false
        };


        HTTPService.submit(newItem).then(function (response) {
            $scope.array.push(response.data);
        })

        $scope.newItem = {};
    };


    //DELETE FUNCTION 
    $scope.delete = function (index) {
        var id = ($scope.array[index]._id)
        HTTPService.delete(id).then(function (response) {
            console.log(response.data.msg);
            HTTPService.getToDo().then(function (object) {
                $scope.array = object.data;
            });
        })
    };

    var id;
    //GRABBING THE ID
    $scope.edit = function (index) {

        console.log(index);
        id = ($scope.array[index]._id);

    }

    //SENDING EDIT --> WITH ID
    $scope.submitEdit = function (newItem) {

        var newItem = {
            title: newItem.name,
            description: newItem.description,
            price: newItem.price,
            imgUrl: newItem.url,
            completed: false
        };

        HTTPService.edit(id, newItem).then(function (object) {
            HTTPService.getToDo().then(function (object) {
                $scope.array = object.data;
            })
        })
    }

}]);