var game = require("./gameBoard");
var readline = require("readline-sync");
var winner = false;
var boatCount = 0;

console.log("WELCOME TO BATTLESHIP - PREPARE FOR WAR")
game.create();
game.print();

function target() {
    var x = readline.question("Please choose a x coordinate: 1 - 10:\n");
    x = (parseInt(x) - 1);
    var y = readline.question("Please choose a y coordinate: 1 - 10:\n");
    y = (parseInt(y) - 1);
    boatCount += game.targetCheck(y, x);
    game.print();
    winningCondition();
}

function winningCondition() { 
    if (boatCount === 3) { 
        console.log("Winner!!!!!!");
        winner = true;
    }
}

while(winner === false) { 
    target(); 
}

