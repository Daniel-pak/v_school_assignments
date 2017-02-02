var application = angular.module("MyModelApplication", []);

application.controller("MainController", function($scope){
	
	$scope.color = "My favorite color is: ";
	$scope.favColor = "Blue";
	
	$scope.name = "My name is: ";
	$scope.myName = "Daniel";
	
	$scope.activity = "My favorite thing to do is : ";
	$scope.favActivity = "Rock Climbing";
});