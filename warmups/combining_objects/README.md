The combining objects warmup was created with the objective to add like objects - as long as they are alike in name and email, it should combine the number of friends

The function combiningAccounts was created to do this: 
	The variables name, email and numfriends were created to use as keys to an objects properties. 
	The function uses 2 for loops - the first creates a new object for each iteration. Then the second for loop checks for similarities in the next and following oject's name and email address - if matches are found it will create a new object with the combined numfriends and push it to the end of the array and splice the original objects. Then both of these objects will be spliced out and the iterations will be reset to start the for loops from the beginning. 

Finally, the newly mutated array is returned.
 
