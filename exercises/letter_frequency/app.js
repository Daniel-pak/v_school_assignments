var phrase = 'slimy smelly solution';
var alpha = "abcdefghijklmnopqrstuvwxyz "

function checker(phrase) {
    var frequencyCheck = [];
    var dupes = [];
    for (var i = 0; i < phrase.length; i++) {
        if (frequencyCheck.indexOf(phrase[i]) < 0) {
            frequencyCheck.push(phrase[i]);
        } else {
            dupes.push(phrase[i]);
        }
    }
    var noDupes = frequencyCheck.join(""); 
    console.log(noDupes);
}

checker(phrase);
