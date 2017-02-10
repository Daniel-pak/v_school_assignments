angular.module("NASAApplication")

.service("HTTPService", ["$http", "geolocation", function ($http, geolocation) {
    //private variables
    var date = new Date();
    var month = pad2(date.getMonth() + 1);
    var day = pad2(date.getDate());
    var year = date.getYear() + 1900;

    function pad2(number) {
        return (number < 10 ? '0' : '') + number
    }

    //service methods
    this.getPicture = function () {
        return $http.get("https://api.nasa.gov/planetary/apod?api_key=W4A3NtOOEwipndbf1Vic2CtfbW9nFVWDbv0BT0Du")
            .then(function (response) {
                return response.data;
            })
    }

    this.getNEO = function () {
        return $http.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=W4A3NtOOEwipndbf1Vic2CtfbW9nFVWDbv0BT0Du")
            .then(function (response) {
                return response.data.near_earth_objects[year + "-" + month + "-" + day];
            })
    }

    this.getLocation = function () {

        return geolocation.getLocation()
            .then(function (data) {
                var mysrclat = data.coords.latitude;
                var mysrclong = data.coords.longitude;

                return $http.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${mysrclong}&lat=${mysrclat}&api_key=W4A3NtOOEwipndbf1Vic2CtfbW9nFVWDbv0BT0Du`)

            });

    }
    
    this.photoArray = [];

    this.getEarthPhotos = function () {

        return $http.get("https://api.nasa.gov/planetary/earth/imagery?lon=-74.0059700&lat=40.7142700&api_key=W4A3NtOOEwipndbf1Vic2CtfbW9nFVWDbv0BT0Du")

    };
    //get photos from LA, NY, Hawaii

    this.getRover = function () { 
        
        return $http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=W4A3NtOOEwipndbf1Vic2CtfbW9nFVWDbv0BT0Du")
    }
    
}])