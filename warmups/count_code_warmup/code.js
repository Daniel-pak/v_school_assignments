/*Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

countCode("aaacodebbb") -> 1 
countCode("codexxcode") -> 2 
countCode("cozexxcope") -> 2*/

//create a function that will check for code
//create a loop that will look for this word in chunks
var testString = "codexxcodecodeiioiruoweijlewkrjcodeewoiruoewiureowcopeepworipewoirpewoicoqe"

function codeCount(string) {
var expressionToMatch = /co[a-z]e/gi;
var matchCount = string.match(expressionToMatch).length;
console.log(softwareCount);
}

codeCount(testString);
/*function codeCount(string) { 
var codeCounter = 0; 
    for (var i = 0; i< string.length; i++) { //or you can not nest these and just use &&
        if (string[i] === "c") {
            if (string[i + 1] === "o") {
                if(string[i + 3] === "e") {
                    codeCounter++
                }
            }
        }
    }
}*/

//Even better 
/*function codeCount(string) {
return straing.match(/co[a-z]e/gi).length;
}*/