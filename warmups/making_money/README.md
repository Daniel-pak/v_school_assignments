The making_money warmup was created to practice with conditionals and functions. 
The premise of the warm up was to take in a number and to put it into currency format with , and $. 
---------------
How this was done: 

The formatMoney function was created that accepts a number as a parameter. This number was put to a string and split into an array. Then by declaring an empty array, I was able to first push in a $. Using a foor loop, minus 2 (which leaves me with the last 2 numbers for the decimal point) and an if conditional, based on the array length (-2), the logic would push numbers to the newly established array followed by a comma. After the for loop is done running, it adds one more decimal point followed by the last 2 numbers and joins them together to return the new string of currency.
