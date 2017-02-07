angular.module("MyApplication")

.service("HTTPService", ["$http", function ($http) {

    this.getImages = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json")
    }
}]);