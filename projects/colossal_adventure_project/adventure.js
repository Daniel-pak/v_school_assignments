var readline = require('readline-sync');
//Setting the monster and player Objects
var player = {
    hitPoints: 100,
    level: 1,
    attackPower: 10,
    isAlive: true
}

var monster = {
    hitPoints: 80,
    level: 2,
    attackPower: 5,
    isAlive: true
}

//functions
function death () {
    console.log("Oh dear! You are dead! Please restart the game!");
    player.isAlive = false;
}

var fightMonster = function () {
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    if (attackPowerScl * player.attackPower > monster.hitPoints) {
        console.log("You have defeated " + currentMonster + " !");
    } else if (attackPowerScl * player.attackPower < monster.hitPoints) {
        console.log("You did " + (attackPowerScl * player.attackPower) + " damage!");
        monster.hitPoints -= attackPowerScl * player.attackPower;
        console.log("Monster hitpoints remaining: " + monster.hitPoints);
        monsterAttack();
        while (player.isAlive === true) {
            var attackAgain = readline.keyIn("Press a to attack again!", {
                limit: 'a'
            });
            if (attackAgain === "a") {
                monster.hitPoints -= attackPowerScl * player.attackPower;
                if (monster.hitPoints > 0){
                console.log("Monster hitpoints remaining: " + monster.hitPoints);
                monsterAttack();
                    }
                } else { 
                 console.log("You defeated " + currentMonster + "!");
                }
            }
        
        }
    }


function monsterAttack () { 
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    var totalDamage = (attackPowerScl * monster.attackPower);
    console.log("You are attacked by " + currentMonster + "!");
    player.hitPoints -= totalDamage;
    console.log(currentMonster + " deals " + totalDamage + " to you!");
    if (player.hitPoints > 0) { 
        console.log("You have " + player.hitPoints + " remaining!")
    } else {
        death();
    }
}
//game
console.log("Welcome to Oghenero, a fantastic land filled with\nwonderful creatures and scary monsters alike!\nPlease enjoy your time here but tread lightly!\nGod Speed!");
var playerName = readline.question("Before you start your adventure here in Oghenero,\nyou must give yourself a name! What would you\nlike to call yourself? ");
console.log("Great! Thank you " + playerName + "! Please enjoy yourself");
/* 
//- An elven warrior with a mastery in Sword and Archery battle techniques!
//- - A wild animal that is known to dismember it's foes!
//-- An ancient wizard with a knack for the dark arts of necromany!
*/
var walking = true;
var enemies = ["Kamala", "Alinafe", "Merlyn"];
while (walking === true) {
    var walk = readline.keyIn('To walk please press w! ', {
        limit: 'w'
    });
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
monsterAttack();
if (player.isAlive === true) { 
    var fightAnswer = readline.keyIn("To fight, press y, to run press n ", {
        limit: 'yn'
    });
    if (fightAnswer == "y") {
        console.log("You decide to fight! You draw your sword...");
        fightMonster();
    } else {
        console.log("You try running...");
        var runningVar = Math.floor(Math.random() * 2 + 1);
        if (runningVar === 1) {
            console.log("You successfully ran away!")
        } else {
            console.log("You must stay and fight!")
        }
    }
}



//var MonsterAttacks function 

//if condition for death 

//array of reward items