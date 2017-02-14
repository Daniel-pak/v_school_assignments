var locations = require('./location');
var gameBoardObject = [];
var boatCount = 0;

function createBoard() {
    for (var i = 0; i < 10; i++) {
        var gameRow = []
        for (j = 0; j < 10; j++) {
            gameRow.push(new locations);
        }
        gameBoardObject.push(gameRow);
    }
}

function printGameBoard() {
    var gameBoardDisplay = [];
    for (var i = 0; i < gameBoardObject.length; i++) {
        var gameRow = []
        for (j = 0; j < gameBoardObject[i].length; j++) {
            gameRow.push(gameBoardObject[i][j].display);
        }
        gameBoardDisplay.push(gameRow.join(" ") + "\n");
    }
    console.log(gameBoardDisplay.join(""))
}

function targetCheck(num1, num2) {
    if (gameBoardObject[num2][num1].Hit === true){
        console.log("You have already hit this target! Please choose again!");
        return 0;
    } else if (gameBoardObject[num2][num1].isShip === true) {
        gameBoardObject[num2][num1].Hit = true;
        gameBoardObject[num2][num1].display = "X";
        return 1;
    } else if (gameBoardObject[num2][num1].isShip === false) {
        gameBoardObject[num2][num1].Hit = true;
        gameBoardObject[num2][num1].display = "M"
        return 0;
    }
}

module.exports = {
    create: createBoard,
    print: printGameBoard,
    targetCheck: targetCheck,
}