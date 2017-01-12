var lowerNumber = function(number1, number2) {
    if (number1 > number2) { 
        console.log(number2 + " is the lower number");
    } else {
        console.log(number1 + " is the lower number");
    }
}
// --------------------------------------------------
var aSmile = true; 
var bSmile = true;
var troubleBrewing = function(aSmile, bSmile) { 
    if (aSmile && bSmile) { 
        console.log("Run!@)$*()@(&%$(#*)");
        return true;
    } else if (!aSmile && !bSmile) {
        console.log("Run!!!#*%$*@#@@*&");
        return true;
    } else {
        return false; 
    }
}
// ---------------------------------------------------

var greeting = function(time) { 
    var time = new Date(); 
    var hour = time.getHours();

    if(hour < 12) {
        console.log("Good Morning!");
    } else if (hour >= 12 && hour < 17) { 
        console.log("Good Afternoon!");
    } else { 
        console.log("Good Evening!")
    }
}

//-------------------------------------------

//Prompt mini-game to see if Monkies will attack. 

/*var aSmile = prompt("Choose yes or no");
var bSmile = prompt("Choose yes or no"); 

if(aSmile.length === 2) { 
	aSmile = false; 		
} else {
	aSmile = true;
}

if(bSmile.length === 2) { 
	bSmile = false; 		
} else {
	bSmile = true;
}

var troubleBrewing = function(aSmile, bSmile) { 
    if (aSmile && bSmile) { 
        console.log("Run!@)$*()@(&%$(#*)");
        return true;
    } else if (!aSmile && !bSmile) {
        console.log("Run!!!#*%$*@#@@*&");
        return true;
    } else {
        return false; 
    }
}

troubleBrewing(aSmile, bSmile);*/