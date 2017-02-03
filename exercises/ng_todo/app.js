var app = angular.module("MyApp", []);

app.controller("MainController", function ($scope, $http) {

    //LOAD TO-DO LIST ON REFRESH
    $http.get("http://api.vschool.io/danielpak/todo")
        .then(function (object) {
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

        $http.post("http://api.vschool.io/danielpak/todo", newItem)
            .then(function (response) {
                $scope.array.push(response.data);
            })

        $scope.newItem = {};
    };


    //DELETE FUNCTION 
    $scope.delete = function (index) {
        var id = ($scope.array[index]._id)
        $http.delete("http://api.vschool.io/danielpak/todo/" + id)
            .then(function (response) {
                console.log(response.data.msg);
                $http.get("http://api.vschool.io/danielpak/todo/")
                    .then(function (object) {
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

        $http.put("http://api.vschool.io/danielpak/todo/" + id, newItem)
            .then(function () {
                $http.get("http://api.vschool.io/danielpak/todo")
                    .then(function (object) {
                        $scope.array = object.data;
                    })
            })
    }



    //if value of checked is true - set put request to change the value of compeleted to true; 
    //if value of checked is false - set put request to change the value of compelted to false;


});