var readline = require('readline-sync');

var player = { 
    hitPoints: 100, 
    level: 1, 
    attackPower: 10
}

var monster = { 
    hitPoints: 80, 
    level: 2, 
    attackPower: 15
}


console.log("Welcome to Oghenero, a fantastic land filled with\nwonderful creatures and scary monsters alike!\nPlease enjoy your time here but tread lightly!\nGod Speed!");
var playerName = readline.question("Before you start your adventure here in Oghenero,\nyou must give yourself a name! What would you\nlike to call yourself? ");
console.log("Great! Thank you " + playerName + "! Please enjoy yourself");

var walking = true; 
var enemies = ["Kamala - An elven warrior with a mastery in Sword and Archery battle techniques!", "Alinafe - A wild animal that is known to dismember it's foes!", "Merlyn - An ancient wizard with a knack for the dark arts of necromany!"];

while (walking === true) { 
    var walk = readline.keyIn('To walk please press w! ', {limit: 'w'});
    var attack = Math.floor(Math.random() * 4 + 1);
    if (attack === 4) {
        console.log("You are being attacked! Please get ready for battle!!");
        walking = false;
    } else {
        console.log("You are walking...");
    }
}

var number = Math.floor(Math.random() * 3);
var currentMonster = enemies[number];
console.log("You are being attacked by " + currentMonster + "!\nWill you stand and fight or run like a coward?");
var fightAnswer = readline.keyIn("To fight, press y, to run press n ", {limit:'yn'});
if (fightAnswer == "y") { 
    console.log("You decide to fight! You draw your sword...");
    //function here 
} else { 
    console.log("You try running..."); 
    var runningVar = Math.floor(Math.random() * 2 + 1);
    if (runningVar === 1) { 
        console.log("You successfully ran away!")
    } else {
        console.log("You must stay and fight!")
    }
}

var fightMonster = function() { 
    var attackPowerScl = Math.floor(Math.random() * 10 + 1); 
    if (attackPowerScl * player.attackPower > monster.hitPoints) { 
        console.log("You have defeated " + currentMonster + " !");
    }
}

//var MonsterAttacks function 

//if condition for death 

//array of reward items 

