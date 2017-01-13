var str = "Thisismystring";

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}



var anotherStr = "thisisanotherstring";
var char = "t";

var letterSearch = function(anotherStr, char) {
    for (var i = 0; i < anotherStr.length; i++) {
        if (anotherStr[i] === char) {
            console.log(char + " was found at index " + i + " in the array");
            break;
        } else if (i === anotherStr.length) { 
            console.log(char + " was not found in " + anotherStr);
        }
    }
}

letterSearch(anotherStr, char);

var arrayOfNumbers = [500, 3, 4, 6, 8, 34, 7, 2, 86, 42, 2, 0];
var targetNumber = 42;

var find = function(arrayOfNumbers) { 
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] === targetNumber) { 
            console.log(targetNumber + " was found at array index " + i);
            break;
        } else if (i === arrayOfNumbers.length - 1) { 
            console.log(targetNumber + " was not found in " + arrayOfNumbers);
        }
    }
}
 
find(arrayOfNumbers);

var smallestNumber = function (arrayOfNumbers) { 
    var smallerNumber = arrayOfNumbers[0];
    for (var i = 1; i < arrayOfNumbers.length; i++) {
        if (smallerNumber > arrayOfNumbers[i]) 
        {
             smallerNumber = arrayOfNumbers[i];
        } 
    }
    console.log(smallerNumber);
}
smallestNumber(arrayOfNumbers);