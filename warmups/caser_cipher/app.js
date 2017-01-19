var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));
/*console.log(shift);*/

/*var cipher = function (input, shift) {
    var keycode = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            keycode.push(input.charCodeAt(i) + shift);
        } else {
            continue;
        }
        for (var j = 0; j < keycode.length; j++) {
            var letterCode = keycode.fromCharCode(j);
            keycode.push(letterCode);
        }
    }
    console.log(keycode);
}*/


/*
cipher(input, shift);*/

var string = "abcdefghijklmnopqrstuvwxyz";

var cipher = function (input, shift) {
    var emptyString = "";
    for (var i = 0; i < input.length; i++) {
        if (string.indexOf(input[i]) < 0) { //because if it is not found it will return a -1
            emptyString += input[i];
        }
        else if (string.indexOf(input[i]) + shift > 25) {
            var index = (string.indexOf(input[i])) + shift - 26;
            emptyString += string[index];
        } else {
            var index = string.indexOf(input[i]);
            emptyString += string[index + shift];
        }
    }
    console.log(emptyString);
}


cipher(input, shift);