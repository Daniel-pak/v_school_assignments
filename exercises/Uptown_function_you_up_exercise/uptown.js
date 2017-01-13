var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


/*var reverseAndPrint = function(lyrics) { 
    var fullSongReversed = lyrics.reverse();
    var song = fullSongReversed.join(" ");
    console.log(song);
}

reverseAndPrint(lyrics);*/

/*var everyOther = function(lyrics) { 
    for(var i = 1; i < lyrics.length; i++) { 
        lyrics.splice(i, 1);
    }
    var other = lyrics.join(" ");
    console.log(other);
}

everyOther(lyrics);*/

var reverseEveryTwo = function (lyrics) { 
    var newString = "";
    for (var i = 1; i <= lyrics.length; i += 2){ 
        if (i < lyrics.length - 1) {
        newString += lyrics[i] + " " + lyrics[i-1] + " ";
            if (lyrics.length % 2 === 0) { 
                continue;
            }
        } else if (i === lyrics.length) {
            newString += lyrics[i-1];
        }
    }
    console.log(newString);
}

reverseEveryTwo(lyrics);

/*
function flipLyrics(lyrics) {
    var string = "";
    for (var i = 0, j = 1; j < lyrics.length; i += 2, j += 2) {
        string += lyrics[j] + " " + lyrics[i] + " ";
    }
    console.log(string);
}

flipLyrics(lyrics);*/
//will only work with an even amount of elements;