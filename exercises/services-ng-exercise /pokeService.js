angular.module("myServices")

.service("pokeService", function () {

    this.favoritePokemon = [];
    this.addPokemon = function (pokemon) {
        if (pokemon !== undefined) {
            this.favoritePokemon.push(pokemon);
        }
    }
    this.removePokemon = function (pokemon) {
        if (pokemon !== undefined) {
            var index = this.favoritePokemon.indexOf(pokemon);
            this.favoritePokemon.splice(index, 1);
        }
    }

})