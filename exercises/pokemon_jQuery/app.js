var data = $.get("http://pokeapi.co/api/v1/pokedex/1/", function(object) { 
    for (var i = 0; i < object.pokemon.length; i++) {
    $("#add_here").append(`<p>${object.pokemon[i].name}</p>`);
    }
});
