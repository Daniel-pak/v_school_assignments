angular.module("MyCartoonApp")

.service("cartoonService", function () {

    this.cartoons = [];

    this.addCharacter = function (character) {

        var newChar = {
            name: character.name,
            url: character.url,
            description: character.description
        }
        
        this.cartoons.push(newChar);
    }

});