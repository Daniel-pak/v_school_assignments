This warm up was used to warm up with functions and conditionals. The premise for this warm up is: 
===============================
Given 3 int values, a b c, return their sum. 
However, if any of the values is a teen -- in the range 13 to 19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a "teens" and should therefore still be added. 
    
Write a separate helper function "fixTeen(n)" that takes in an integer value and returns that value fixed for the teen rule.
================================
By creating a helper function fixTeen that takes a number, it checks the number and returns the proper number 0 or n based on the above parameters. 

Then with the help of the fixTeen function, the noTeenSum function would take 3 parameters and the callback function which checks each of the numbers and the numbers. The function then returns the total. 


