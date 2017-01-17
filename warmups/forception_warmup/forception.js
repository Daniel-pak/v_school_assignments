var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
    var emptyArray = [];
    alphabet = alphabet.toUpperCase();
    for (var i = 0; i < people.length; i++) {
        emptyArray.push(people[i] + ":");
        for (var j = 0; j < alphabet.length; j++) {
             emptyArray.push(alphabet[j]);
        } 
    }
    console.log(emptyArray);
}
forception(people, alphabet); 

