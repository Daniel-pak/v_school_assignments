var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

/*var printOut = function (lyrics) {
    var fullSong = lyrics.join(" ")
    console.log(fullSong);
}

printOut(lyrics);

var reverseAndPrint = function(lyrics) { 
    var fullSongReversed = lyrics.reverse();
    var song = fullSongReversed.join(" ");
    console.log(song);
}

reverseAndPrint(lyrics);

var everyOther = function(lyrics) { 
    for(var i = 1; i < lyrics.length; i += 2) { 
        lyrics.splice(i, 1);
    }
    var other = lyrics.join(" ");
    console.log(everyOther);
}
everyOther(lyrics);*/

var reverseEveryTwo = function (lyrics) { 
    var newString = "";
    for (var i = 1; i <= lyrics.length; i += 2){ 
        if (i < lyrics.length - 1) {
        newString += lyrics[i] + " ";
        newString += lyrics[i-1] + " ";
            
        } else if (i === lyrics.length) {
            newString += lyrics[i-1];
        }
    }
    console.log(newString);
}

reverseEveryTwo(lyrics);