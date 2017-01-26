var readline = require("readline-sync");

var dictionary = {};
var alreadyAdded = false;

function wordSearch(wordCheck) {
    var word = readline.question("What word would you like to look-up or add? ");
    word = word.toLowerCase();
    wordCheck(word);
    if (dictionary[word] == undefined && alreadyAdded === false) {
        var definition = readline.question("This word is not found, please add a definition. ");
        dictionary[word] = definition;
    } else if (alreadyAdded === true) {
        console.log("please restart search!")
    } else {
        console.log(dictionary[word]);
    }
}


function wordCheck(word) {
    var regex = new RegExp(word, "gi");
    var count = [];
    var match;
    for (key in dictionary) {
        count.push(key);
        for (var i = 0; i < count.length; i++) {
            match += count[i].match(regex)
        }
        if (isNaN(match)) {
            console.log("You already have this item or the root of the item, please search for the singular version of this.");
            alreadyAdded = true;
        }
    }
}

wordSearch(wordCheck);
wordSearch(wordCheck);