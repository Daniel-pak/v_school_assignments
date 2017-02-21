This warmup was created to work with readline-sync package in node as well as functions and conditionals. 

The premise of this warmup is based on a caser cipher - essentially, you are allowed to enter a string and shift each letter by a certain number to output a different letter. 

Using readline-sync, we require the package and use the question method to obtain a phrase to encrypt - following, we ask how many letters the user would like to encrypt the phrase by. 

First I created a string of letters that allows me to reference throughout the function. 

The cipher function allows takes 2 parameters - input string and a shift number. 
	The function creates a new string and runs a for loop which populates this string based on 2 conditions - If the phrase contains any non-letter characters it would push this into the new string (for example: hyphen or space), however if this returns false it would then check if the specific character of the string and the shift number would go over the index of the alphabet string - if it does it will do basic arithmetic to loop through the alphabet and return the corresponding letter of the alphabet. If both of these parameters are not met then it will run the else loop adding the newly shifted letter with the shift number added to the index call in the [].

The function then console logs the newly created string
