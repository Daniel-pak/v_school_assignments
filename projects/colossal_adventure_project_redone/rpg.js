var readline = require('readline-sync');
//Player and Monster Objects + standard variables
var player = {
    hitPoints: 500,
    level: 1,
    attackPower: 9,
    isAlive: true,
    inventory: ["Health Potion, Map, Chicken Bone"];
}
var monster = {
    hitPoints: 500,
    level: 1,
    attackPower: 10,
    isAlive: true
}
var walky = true;
var enemies = ["Kamala", "Alinafe", "Merlyn"];
var number = Math.floor(Math.random() * 3);
var currentMonster = enemies[number];
//***********************************Functions*****************************************
function monsterAttack() {
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    var totalDamage = (attackPowerScl * monster.attackPower);
    if (player.hitPoints > 0) {
        console.log("You are attacked by " + currentMonster + "!");
        player.hitPoints -= totalDamage;
        console.log(currentMonster + " deals " + totalDamage + " to you!");
        console.log("Your current health remaining: " + player.hitPoints);
        console.log("***************************************************")
        if (player.hitPoints > 0) {
            fightMonster();
        } else {
            death();
        }
    }
}

function death() {
    player.isAlive = false;
    console.log("Oh dear! You are dead! Please restart the game!");
}

function fightMonster() {
    var attackPowerScl = Math.floor(Math.random() * 10 + 1);
    var totalDamage = (attackPowerScl * player.attackPower);
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
        console.log("You attack " + currentMonster + " and deal " + totalDamage + " damage!");
        console.log("You have slain " + currentMonster + "!");
        console.log("Your victory has replenished you and you at now back at full health!");
        player.hitPoints = 100;
        console.log("You have now gained a special item!");
        monster.isAlive = false;
        console.log("Great Warrior! You have slain the best of Oghenero!\nYou may now claim a coveted item of this land\nthe Great Scimitar of Deadelus.\nWith this sword, you may slay any beast in this land with\na mighty swing. Please use this wisely.");
        console.log("Congratulations! You have won the game! You may now\ntype 'print' to show your stats and inventory!")
    }
}

function winner() {
    player.inventory.push("Scimitar of Deadelus");

}

function walking() {
    while (walky === true) {
        var walk = readline.keyIn('To walk please press w! ', {limit: 'w'});
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


//************************************GAME HERE******************************************
console.log("Welcome to Oghenero, a fantastic land filled with\nwonderful creatures and scary monsters alike!\nPlease enjoy your time here but tread lightly!\nGod Speed!");
var playerName = readline.question("Before you start your adventure here in Oghenero,\nyou must give yourself a name! What would you\nlike to call yourself? ");
console.log("Great! Thank you " + playerName + "! Please enjoy yourself");

walking();
walkingTillAttacked();