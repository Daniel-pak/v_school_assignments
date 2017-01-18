var readline = require('readline-sync')

var answer = readline.question("Hello, please enter your name! ");
console.log("Sweet, thanks " + answer.toUpperCase());

var length = readline.question("Please enter a word to find the given length! ");
length = length.length;
console.log("The word or string is " + length + " characters long");

var concat = readline.question("Please enter a word! ");
var concat2 = readline.question("Please enter another word! ");
console.log("Below is your concatenated word!\n"+ concat + concat2);

var longWord = readline.question("please enter a really really long word or phrase! ");
if (longWord.length >= 20) { 
    var empty = "";
    for(var i = longWord.length/2; i <longWord.length; i++) { 
        empty += longWord[i];
    }
    console.log(empty);
} else {
    console.log(longWord);
}

var index = readline.question("Choose a number! I will read back to you\nyour string from this index!");
var anotherEmpty =""; 
for (var i = index; i < longWord.length; i++) { 
    anotherEmpty += longWord[i];
}
console.log(anotherEmpty);