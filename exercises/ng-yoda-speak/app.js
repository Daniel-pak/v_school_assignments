var app = angular.module("MyApplication", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
    $scope.yoda;
    
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };

    $scope.submit = function (sentence) {

        $http.get(`https://yoda.p.mashape.com/yoda?sentence=${sentence}`, config)
            .then(function (response){
            $scope.yoda = response.data;
        });
        
        $scope.sentence = "";

    }

}]);