angular.module("DirectivesApp")

.controller("SecondaryTechController", ["$scope", function ($scope) {

    $scope.secondaryItems = [
        {
            name: "VR Goggles",
            url: "https://heavyeditorial.files.wordpress.com/2015/07/zeiss.jpg?quality=65&strip=all&w=780&strip=all",
            price: 199.99
        },
        {
            name: "Samsung TV",
            url: "http://www.samsung.com/ph/curveduhd/images/mount_stand_tv.png",
            price: 1199.00

        },
        {
            name: "Hoverboard",
            url: "http://i.dailymail.co.uk/i/pix/2016/03/14/18/322FC8FC00000578-3491968-image-a-22_1457980707710.jpg",
            price: 30000
        }]

}])