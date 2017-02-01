var app = angular.module("MyApplication", []);


app.controller("MainCtrl", function ($scope) {
	
	$scope.test = "Testing... testing... 1... 2... 3..!";
	
	$scope.person = { 
		firstName: "Bob", 
		lastName: "The Builder"
	}
	
	$scope.string = "My favorite person in the world is:";
	
	
});