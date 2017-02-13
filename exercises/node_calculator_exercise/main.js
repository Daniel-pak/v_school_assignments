var mathy = require("./module/index.js");
var readline = require("readline-sync");
var numberChange = require("./module/stringsToNumbers")

console.log("Thanks for using my dope calc bruhhh!");

var operation = readline.question("What operation would you like to perform? \n1.subtraction\n2.addition\n3.multiplication\n4.division\n5.exponent\nPlease choose name or just type the number:\n");

if (operation.length > 1) { 
    operation = operation.toLowerCase();
}

console.log("Awesome! Please enter the two numbers you'd like to perform this on!");
var num1 = readline.prompt();
var num2 = readline.prompt();

num1 = numberChange(num1);
num2 = numberChange(num2);


function mathing(num1, num2, operation) {
    switch (operation) {
    case "subtraction":
    case "1":
        console.log(mathy.subtraction(num1, num2));
        break;
    case "addition":
    case "2":
        console.log(mathy.addition(num1, num2));
        break;
    case "multiplication":
    case "3":
        console.log(mathy.multiplication(num1, num2));
        break;
    case "division":
    case "4":
        console.log(mathy.division(num1, num2));
        break;
    case "exponent":
    case "5":
        console.log(mathy.exponent(num1, num2));
        break;
    }
}

mathing(num1, num2, operation);