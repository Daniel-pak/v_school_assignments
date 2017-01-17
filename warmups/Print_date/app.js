var date = new Date().getDay(); 
console.log(date);

function dayOfTheWeek(date) {
    switch (date) { 
        case 0: 
            console.log("Today is: Sunday"); 
            break; 
        case 1: 
            console.log("Today is: Monday");
            break; 
        case 2: 
            console.log("Today is: Tuesday"); 
            break;
        case 3: 
            console.log("Today is: Wednesday"); 
            break; 
        case 4: 
            console.log("Today is: Thursday");
            break; 
        case 5: 
            console.log("Today is: Friday");
            break; 
        case 6: 
            console.log("Today is: Saturday");
            break;
    }
}

dayOfTheWeek(date);

var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();

function printTime(hour, minute, second) { 
    if(hour >= 12) { 
        console.log("Current time is: " + hour + ":" + minute + ":" + second + " PM");
    } else {
        console.log("Current time is: " + hour + ":" + minute + ":" + second + " AM");
    }
}

printTime(hour, minute, second);
