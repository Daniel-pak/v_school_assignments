The anticaps_warmup was created to practice with functions and for loops. The premise of the warmup was to create a function that accepted a string and turns lowercase to capital letters and vice versa. For example: "Hello" would return "hELLO"

I started by creating two variable strings - alphabet lower and alphabet Upper - alphabetUpper was created through the toUpperCase() method from the string alphabetLower

The function antiCaps took a string parameter and split each letter into an array item and created a new empty array. Then by looping through the split array, I was able to check the case of the letter with the indexOf() method and push a letter from the appropriate global variable. Finally, I turned the array into a string using the join() method.  
