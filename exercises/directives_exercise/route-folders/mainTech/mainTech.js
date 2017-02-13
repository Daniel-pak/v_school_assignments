angular.module("DirectivesApp")

.controller("MainTechController", ["$scope", function ($scope) {

    $scope.mainItems = 
        [{
            name: "Pixel", 
            url: "http://img.bbystatic.com/BestBuy_US/store/ee/2016/mob/pr/SOL-5052-google/pixel-hero.jpg",
            price: 649
        }, 
        {
            name: "Apple Desk Top 27 inch",
            url: "https://images-na.ssl-images-amazon.com/images/I/91bGcrFfMOL._SX425_.jpg",
            price: 2300
        },
         {
             name: "Bluetooth Mac KeyBoard", 
             url: "https://cs.gmu.edu/~sean/stuff/n800/keyboard/keyboard.jpg", 
             price: 79.99
         }, 
         {
             name: "Mac Bluetooth Mouse", 
             url: "https://images-na.ssl-images-amazon.com/images/I/31LyNe-LrGL.jpg", 
             price: 80.00
         }
        ]


}])