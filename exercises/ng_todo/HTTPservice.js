angular.module("MyApp")

.service("HTTPService", ["$http", function ($http) {

    this.getToDo = function () {
        return $http.get("http://api.vschool.io/danielpak/todo");
    }
    this.submit = function (item) {
        return $http.post("http://api.vschool.io/danielpak/todo", item);
    }
    
    this.delete = function(id) { 
        return $http.delete("http://api.vschool.io/danielpak/todo/" + id);
    }
    
    this.edit = function(id, item) { 
        return $http.put("http://api.vschool.io/danielpak/todo/" + id, item);
    }


}]);