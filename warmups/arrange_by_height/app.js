//Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
//
//Example
//
//For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
//sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
//
//Input/Output
//
//[time limit] 4000ms (js)
//[input] array.integer a
//
//If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.
//
//Constraints:
//5 ≤ a.length ≤ 15,
//-1 ≤ a[i] ≤ 200.
//
//[output] array.integer
//
//Sorted array a with all the trees untouched.

var array = [-1, 150, 190, 170, -1, -1, 160, 180];

function arrangeByHeight(array) {
    var treeArray = [];
    var height = [];
    var finalArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === -1) {
            treeArray.push(i)
        } else {
            height.push(array[i]);
        }
    }
    height.sort(function (a, b) {
        return a - b
    });
    for (var j = 0; j < array.length; j++) {
            if (j !== treeArray[0]) {
                finalArray.push(height[0]);
                height.splice(0, 1);
            } else {
                finalArray.push(-1);
                treeArray.splice(0, 1);
            }
    }
    return finalArray;
}

console.log(arrangeByHeight(array));