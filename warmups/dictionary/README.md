The dictionary warmup was created to practice with READLINE sync and objects. 

The premise of the warm up was to create a dictionary searcher that would allow you to add new words and their meanings or return a definition if the word that was being searched was already in the dictionary. 

The readline-sync package was used by requiring it in line 1. 

The dictionary object was created as well as the alreadyAdded variable which was used in the function. 

The wordSearch function prompts the user to search a word, this word is then put into lowercase and checked using the wordCheck function. Using the for in loop, the key was searched for a match in the dictionary - if a root was found then a console.log would return saying that the word being searched was already added and therefore needed to be searched again with root of the word (alreadyAdded turns true). 

After the wordCheck function is finished running, an if conditional runs and if the word is undefined and the alreadyAdded boolean is stil false, it prompts you for a definition to add. If this is also false then the else condition would run by just returning the definition of the dictionary item. 


