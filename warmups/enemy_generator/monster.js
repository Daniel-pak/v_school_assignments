var chooseMonster = function () {
    var monsterArray = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var outOf3 = Math.floor(Math.random() * 3);
    return monsterArray[outOf3];
};  

/*
function getRandomInt(min,max) { 
    return Math.floor((Math.random() * (max-min)) + min);
}
*/ 

var selectHitpoints = function (type) {
    if (type === "Ancient Dragon") {
        return Math.floor(Math.random() * (100 - 80 + 1) + 80);
    } else if (type === "Prowler") {
        return Math.floor(Math.random() * (79 - 50 + 1) + 50);
    } else {
        return Math.floor(Math.random() * (49 - 20 + 1) + 20);
    }
}

function Monster() {
    this.type = chooseMonster();
    this.hitpoints = selectHitpoints(this.type);
    this.defense = this.hitpoints * 3;
}

var num = 0;
var emptyArray = []; 

while (num < 100) { 
    var newMonster = new Monster();
    emptyArray.push(newMonster);
    num++;
}

//If I know the amount of times I want to run this loop, use a for loop; 
/*for (var i = 0; i < 100; i++) { 
    var newMonster = new Monster();
    emptyArray.push(newMonster);
}*/

console.log(emptyArray);
