/*
var obj={};
str='slimy smelly solution';

for(var i = 0, length = str.length; i < length; i++) {
    var l = str.charAt(i)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1); //creating an object by calling the letter and then set the property to it by using obj[bracknotation (creating object)] = if ....
}

console.log(obj);
*/

var object = {};
var phrase = "This is a phrase"; 

for (var i = 0; i < phrase.length; i++) { 
    var index = phrase[i];
    if (isNaN(object[index])) { 
        object[index] = 1; 
    } else { 
        object[index] = object[index] + 1;
    }
}
console.log(object);

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

/*

var phrase = 'slimy smelly solution';

// function that takes a string and outputs the num of occurances of each letter in the string
function letterCount(str) {
    // create object for keeping track of the letter count
    var count = {};
    
    // loop through the string to get access to each letter
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        // If that object already had that letter
        if (count[letter] !== undefined) {
            // increment it by 1
            count[letter]++;
        } else {
            // create a new property for that letter and set it to 1
            count[letter] = 1;
        }
    }
    // print out the letter and the number of times that letter was found
    return(count);
}

letterCount(phrase);

*/

/*
function sortFrequency(count) {
    var sortedKeys = Object.keys(count).sort(function(a, b) {
        return count[b] - count[a];
    });
    var sortedFrequency = {};
    for (var i = 0; i < sortedKeys.length; i++) {
        sortedFrequency[sortedKeys[i]] = count[sortedKeys[i]];
    }    
    return sortedFrequency;
}
console.log(sortFrequency(letterCount(phrase)));*/
