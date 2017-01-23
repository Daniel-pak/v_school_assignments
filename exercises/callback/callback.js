var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];


for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, text);
    
}

function attemptCall(name, dontCall, call, text) {
    if (name.length % 2 === 0) {
        setTimeout(call, 2000, name);
    } else if (name.length % 2 === 1) {
        setTimeout(dontCall, 1000, name);
    }
}

function dontCall(name) {
    console.log("You did not call " + name);
}

function call(name) {
    console.log("You called " + name);
}

function text(name) {
    console.log("You texted " + name);
}