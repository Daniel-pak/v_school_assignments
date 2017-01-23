var readline = require('readline-sync');
//Player and Monster Objects + standard variables
var player = {
    hitPoints: 100,
    level: 1,
    attackPower: 9,
    isAlive: true,
    inventory: ["Health Potion", "Map", "Chicken Bone"]
}
var monster = {
    hitPoints: 100,
    level: 1,
    attackPower: 10,
    isAlive: true
}
var walky = true;
var enemies = ["Kamala", "Alinafe", "Merlyn"];

var currentMonster = enemies[generateRandomNumber(3)];

//***********************************Functions*****************************************
function monsterAttack() {
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    var totalDamage = (attackPowerScl * monster.attackPower);
    if (player.hitPoints > 0) {
        console.log("You are attacked by " + currentMonster + "!");
        player.hitPoints -= totalDamage;
        console.log(currentMonster + " deals " + totalDamage + " to you!");
        if (player.hitPoints > 0) {
            console.log("Your current health remaining: " + player.hitPoints);
            console.log("***************************************************");
            fightMonster();
        } else if (player.hitPoints <= 0) {
            console.log("Your current health remaining: 0");
            console.log("***************************************************");
            death();
        }

    }
}


function generateRandomNumber(x) {
    var number = Math.floor(Math.random() * x);
    return number;
}

function death() {
    player.isAlive = false;
    console.log("Oh dear! You are dead! Please restart the game!");
}

function fightMonster() {
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    var totalDamage = (attackPowerScl * player.attackPower);
    if (player.hitPoints < 100 && player.inventory.length === 3) {
        healthPotion();
    };
    var attacking = readline.keyIn("To attack press a", {
        limit: 'a'
    });
    if (totalDamage < monster.hitPoints) {
        while (monster.isAlive === true && player.isAlive === true) {
            if (monster.hitPoints > 0 && player.hitPoints > 0) {
                console.log("You attack " + currentMonster + " and deal " + totalDamage + " damage!");
                monster.hitPoints -= totalDamage;
                console.log("Total monster HP remaining: " + monster.hitPoints);
                console.log("**********************************************")
                monsterAttack();
            } else {
                monster.isAlive = false;
            }
        }
    } else {
        monster.isAlive = false;
        player.hitPoints = 100;
        console.log("You attack " + currentMonster + " and deal " + totalDamage + " damage!");
        console.log("You have slain " + currentMonster + "!");
        console.log("Your victory has replenished you and you at now back at full health!");
        console.log("*****************************************************")
        console.log("You have now gained a special item!");
        console.log("Great Warrior! You have slain the best of Oghenero!\nYou may now claim a coveted item of this land\nthe Great Scimitar of Deadelus.\n*******************************************\nWith this sword, you may slay any beast in this land with\na mighty swing. Please use this wisely.");
        console.log("Congratulations! You have won the game! You may now\ntype 'print' to show your stats and inventory!");
        winner();
    }
}

function winner() {
    player.inventory.push(" Scimitar of Deadelus");
    var inventory = readline.prompt();
    if (inventory === "print") {
        console.log("Player name: " + playerName + "\nyour inventory contains: " + player.inventory + "\nYour hitpoints: " + player.hitPoints); // for loop implementation here.
    }
}

function walking() {
    while (walky === true) {
        var walk = readline.keyIn('To walk please press w! ', {
            limit: 'w'
        });
        var attack = Math.floor(Math.random() * 4 + 1);
        if (attack === 4) {
            console.log("You are being attacked! Please get ready for battle!!");
            walky = false;
            walkingTillAttacked();
        } else {
            console.log("You are walking...");
        }
    }
}

function walkingTillAttacked() {
    if (monster.isAlive === true && player.isAlive === true) {
        var fightAnswer = readline.keyIn("To fight, press y, to run press n ", {
            limit: 'yn'
        });
        if (fightAnswer == "y" && monster.hitPoints > 0 && player.hitPoints > 0) {
            console.log("You decide to fight! You draw your sword...");
            fightMonster();
        } else {
            console.log("You try running...");
            var runningVar = Math.floor(Math.random() * 2 + 1);
            if (runningVar === 1) {
                console.log("You successfully ran away!");
                walky = true;
                walking();
            } else {
                console.log("You must stay and fight!");
                console.log("........................");
                console.log("........................");
                if (monster.isAlive === true) {
                    monsterAttack();
                    if (player.isAlive === true)
                        fightMonster();
                }
            }
        }
    }
}

function healthPotion() {
    var healthpotion = readline.keyIn("Use a health potion? Click y for yes or n for no", {
        limit: 'yn'
    });
    if (player.inventory.length === 3 && healthpotion === 'y') {
        player.hitPoints += 20;
        console.log("Your hitpoints are healed a bit, your current hitpoints: " + player.hitPoints);
        player.inventory.shift();
    }
}



//************************************GAME HERE******************************************
console.log("Welcome to Oghenero, a fantastic land filled with\nwonderful creatures and scary monsters alike!\nPlease enjoy your time here but tread lightly!\nGod Speed!");
var playerName = readline.question("Before you start your adventure here in Oghenero,\nyou must give yourself a name! What would you\nlike to call yourself? ");
console.log("Great! Thank you " + playerName + "! Please enjoy yourself");

walking();
walkingTillAttacked();

