//_You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input._
//
//*Example*
//
//For `inputArray = [1, 1, 1]`, the output should be
//`arrayChange(inputArray) = 3`
//(Need to increase `inputArray[1]` by 1 (so 2 is greater than 1) and increase `inputArray[2]` by 2 (so 3 is greater than 2). Total increase = 3.
//
//*Input/Output*
//
//[time limit] 4000ms (js)
//[input] array.integer inputArray
//
//*Constraints:*
//`3 ≤ inputArray.length ≤ 105`,
//`-105 ≤ inputArray[i] ≤ 105`.
//
//[output] integer
//
//The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
//It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type. (edited)
//
// 
//“Strictly increasing” means each item in the array is greater (by at least 1, but maybe more) than the previous item
// 
//So `[1, 3, 5, 7, 9, 100000]` is strictly increasing. `[2, 4, 6, 6, 8]` and `[3, 6, -1, 9]` are not (Two 6's in a row, -1 is less than 6)

function arrayChange(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) { 
        if (arr[i+1] <= arr[i]) { 
            var difference = (arr[i] + 1);
            count += (difference - arr[i + 1])
            arr[i + 1] = difference;
            ;
        } 
    }
    return arr;
    return count;
}

console.log(arrayChange([1, 1, 1]));
//Expected Output: 3
console.log(arrayChange([-1000, 0, -2, 0]));
//Expected Output: 5
console.log(arrayChange([2, 1, 10, 1]));
//Expected Output: 12
console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));
//Expected Output: 13