var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var objects = data.objects;
        var pokemon = objects[0].pokemon;
        console.log(pokemon[0])
          for (var i = 0; i < pokemon.length; i++) {
            document.getElementById("add_here").innerHTML += `<p>${pokemon[i].name}</p>`;
        }
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();