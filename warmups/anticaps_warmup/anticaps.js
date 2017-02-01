var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = alphabetLower.toUpperCase();

function antiCaps(str) { 
    var array = str.split("")
    var emptyArray = [];
    for (var i = 0; i < str.length; i++) { 
        if(alphabetLower.indexOf(str[i]) >= 0) { 
            emptyArray.push(alphabetUpper[alphabetLower.indexOf(str[i])]);
        } else if(alphabetUpper.indexOf(str[i]) >= 0) { 
            emptyArray.push(alphabetLower[alphabetUpper.indexOf(str[i])]);
        }
    }
    var newString = emptyArray.join("");
    console.log(newString);
}

antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa  