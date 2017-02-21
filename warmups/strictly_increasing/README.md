The strictly increasing warmup was created to practice functions.
The parameters: 
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
======================

The function arrayChange takes an array as a parameter and runs through a for loop based on the array.length. Using an if conditional, the value of the iteration would be checked against the next item in the array and the difference would be accounted for in the variable difference. Then the count would be added to the difference minus the second item being compared. And the second item would be changed to the item at iteration i + 1. The changed array would then be returned as well as our accumulated difference count. 

