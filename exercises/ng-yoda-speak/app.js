var app = angular.module("MyApplication", []);

app.controller("MainController", ["$scope", "yodaService", function ($scope, yodaService) {
    
    $scope.yoda;
    
    $scope.submit = function (sentence) {

       yodaService.getSentence(sentence).then(function (response){
            $scope.yoda = response.data;
        });
        
        $scope.sentence = "";

    }

}]);