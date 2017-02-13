function addition(num1 , num2) { 
    return num1 + num2;
}

var subtraction = function(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) { 
    return parseFloat(num1/num2)
}

var multiplication = (num1, num2) => num1 * num2; 

var exponent = (num1, num2) => Math.pow(num1, num2);

module.exports = {
    addition: addition,
    division: division, 
    multiplication: multiplication, 
    exponent: exponent
}

module.exports.subtraction = subtraction;