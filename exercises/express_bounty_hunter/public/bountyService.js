angular.module("MyApp")

.service("BountyService", ["$http", function ($http) {

    var url1 = "http://localhost:8000/bounty";
    var url2 = "http://localhost:8000/bounty/"

    this.getBountyList = function () {
        return $http.get(url1)
    }
    
    this.submitNewBounty = function(object) { 
        return $http.post(url1, object);
    }
    
    this.deleteBounty = function(id) { 
        return $http.delete(url2+id)
    }
    
    this.editBounty = function(id, object) { 
        return $http.put(url2+id, object);
    }
}])