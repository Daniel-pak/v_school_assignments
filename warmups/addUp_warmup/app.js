console.log(addsUp(10, [5, 1, 5])) // true, because 5 + 5 === 10  
console.log(addsUp(10, [2, 3, 1, 5])) // true, because 2 + 3 + 5 === 10  
console.log(addsUp(10, [4, 2, 5])) // false, no combination could add to 10  


function addsUp(num, array) {
    var notSingleDigits = false;
    for (var i = 0; i < array.length; i++) {
        var sum = array[i];
        for (var j = 1; j < array.length; j++) {
            if ((i === array.length - 1 && j === array.length - 1) && notSingleDigits === false) {
                notSingleDigits = true;
                i = 0;
                j = i + 2;
            } else if (sum + array[j] === num && notSingleDigits === false) {
                return true;
            } else if (notSingleDigits === true) {
                sum = array[i] + array[i + 1];
                if (sum + array[j] === num && (i !== array.length - 1 && j !== array.length - 2)) {
                    return true;
                }
            }
        }
    }
    return false;
}


