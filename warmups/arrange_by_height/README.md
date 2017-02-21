For this warmup, the parameters for the exercise was: Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

For this I created a function with 3 empty arrays - In this, I used a for loop to filter out the -1 by index number and populate my first empty array while also populating my second array with the heights. 

Then I used the array.prototype.sort() method to sort the heights by increasing height. 

Finally, I used another for loop which ran the original length of the array - If j (the iterator) matches an index of a tree in the treeArray, I passed a -1 and spliced it, if not, I added a height item and spliced that as well. Then finally I return the third populated array with trees in their original spot as well as the new sorted heights. 

