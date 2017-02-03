var app = angular.module("MyApp", []);

app.controller("MainController", function ($scope) {
	
	$scope.addPerson = function (item) {
		$scope.person.push(item);
		$scope.newPerson = {};
		myForm.$untouched;
	}

	$scope.person = [
		{
			firstName: "Daniel",
			lastName: "Pak",
			phone: "7327795034",
			birthPlace: "New Jersey",
			food: "Chicken Noodle Soup",
			comment: " I know things"
	}
	]

})