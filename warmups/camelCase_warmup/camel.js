var string = "This is super  cool";
var Error = { 
    message: "Invalid input, please do not us double spaces, hyphens or underscores."
}

function camelCase(string) {
    var newString = string.toLowerCase();
    var newArray = newString.split("");
    var emptyarray = [];
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] === " " || newArray[i] === "-" || newArray[i] === "_") {
            if (newArray[i + 1] === " " || newArray[i + 1] === "-" || newArray[i + 1] === "_") {
                throw Error.message;
            } else {
                var newWord = newArray[i + 1].toUpperCase();
                emptyarray.push(newWord);
                newArray.splice(i, 1);
            }
        } else {
            emptyarray.push(newArray[i]);
        }
    }
    var camelCased = emptyarray.join("");
    console.log(camelCased);
}

camelCase(string);