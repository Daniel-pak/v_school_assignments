/*Write a function that accepts two numbers as parameters, and returns the sum.

Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.*/

function sum(num1, num2) { 
    console.log(num1 + num2);
}


function largerNumber(num1, num2, num3) { 
    if (num1 > num2 && num1 > num3) { 
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) { 
        console.log(num2);
    } else {
        console.log(num3);
    }
}

function oddOrEven(num) { 
    if (num === 0) { 
        console.log("zero");
    } else if (num % 2=== 0) { 
        console.log("even");
    } else {
        console.log("odd");
    }
}


function twentyLetterCheck(str) { 
    var newString ="";
    if (str.length <= 20) { 
        newString += str; 
        newString += str; 
    } else {
        for (var i=0; i < (str.length/2); i++){ 
            newString += str[i]
        }
    }
    console.log (newString);
}

function fibonacci(n) { 
    var startNumber = 0;
    var listofNumbers = [];
    for (var i = 0, j = 1; i < n-1; i++, j++){ 
        if (i <= 1) { 
            listofNumbers.push(startNumber);
            listofNumbers.push(++startNumber);
        } else {
            listofNumbers.push((listofNumbers[j] + listofNumbers[i]));
        }
        startNumber += listofNumbers[i] + listofNumbers[j];
    }
    console.log(listofNumbers);
    console.log(startNumber);
}

fibonacci(7);
