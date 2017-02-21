angular.module("BronyCentralApp")

.service("PonyService", ["$http", function ($http) {

    this.addPony = function (object) {
        return $http.post("http://api.vschool.io/danielpak/pony", object).then(function (response) {
            return response;
        })
    }

    this.deletePony = function (id) {
        return $http.delete(`http://api.vschool.io/danielpak/pony/${id}`).then(function (response) {
            return response;
        })
    }

    this.getMyPonies = function () {
        return $http.get("http://api.vschool.io/danielpak/pony").then(function (response) {
            return response;
        })
    }

    this.validatePony = function (object) {
        //object.name/username/img
        if (object.name !== "" && object.username !== "" && object.imgUrl !== "") {
            if (object.name.length <= 3) {
                return ({
                    message: "Name too short, please submit again with proper parameters -- stupid"
                })
            } else if (object.name.length > 3) {
                for (var i = 0; i < object.name.length; i++) {
                    if (typeof (object.name[i]) == "number") {
                        return ({
                            message: "Name has number in it, please submit again with proper parameters -- stupid..."
                        });
                        break;
                    }
                }
            }
            this.addPony(object);
        }
    }
}])


//Prevents pony objects that don't have a name, username, or imgUrl from being added
//Prevents pony object names from having any numbers in them (text only)
//Ensures that pony name has more than 3 characters