/*You have just been called into a technical interview at some large, evil corporation. They want you to remove all the duplicate letters from a string. But you decide to only partially comply with their wishes. 

You create one string that has no duplicate letters, and 

another with all the letters that were removed because they were duplicates.*/


/*
var removeDuplicate = function (myString) {
    var myNewString = "";
    var dupes = ""; 
    for(i=0; i<myString.length; i++) { 
        for(j=1; j<myString.length; j++){ 
            if(myString[i] === myString[j]){
                dupes += myString[j];
            } else if (myNewString[i] !== myNewString[j]){
                myNewString += myNewString[j]
            }
        }
    }
    console.log(myNewString);
    console.log(dupes);
}
removeDuplicate(myString);*/

function noDupes(string) { 
    string = string.toLowerCase(); 
    
    uniques = ""; 
    misfits = ""; 
    
    for (var i=0; i<string.length; i++) { 
        if(uniques.indexOf(string[i]) !== -1) {
            misfits += string[i];
        } else { 
            uniques += string[i];
        }
    }
}