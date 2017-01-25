function Team(name) { 
    this.population = 1000000;
    this.name = name;
    this.isAttacked = false;  
}

var penguins = new Team("Emperor Penguins");
var communists = new Team("Communists");

function flipCoin() {
    console.log("The coin flip begins... Everyone watches as the coin enters slow motion...\nheads...tails....heads....tails...heads...tails...")
    var flip = Math.floor(Math.random() * 2 + 1);
    if (flip === 1) {
        console.log("Communists will attack first!");
        console.log("************************************************");
        return sendNuke(communists, onHit, onMiss);
    } else {
        console.log("Penguins will attack first!");
        console.log("************************************************");
        return sendNuke(penguins, onHit, onMiss);
    }
}

function sendNuke(party, onHit, onMiss) {
    var randomInt = Math.floor(Math.random() * 10 + 1);
    if (randomInt <= 5) {
        onHit(party);
    } else {
        onMiss(party);
    }
}

function onHit(party) {
    var damageOnHit = Math.floor(Math.random() * (1000000 - 100) + 10000);
    console.log(party.name + " attack and land dealing devastating damage!!!");
    if (party === communists) {
        var name = "The Penguins"
        penguins.isAttacked = true;
        communists.isAttacked = false;
        penguins.population -= damageOnHit;
        if (penguins.population > 0) {
            console.log(name + " took " + damageOnHit + " damage from the nuke! Population remaining..." + penguins.population);
        } else if (penguins.population <= 0) {
            console.log(name + " took " + damageOnHit + " damage from the nuke! Population remaining..." + 0);
        }
    } else {
        var name = "The Communists"
        communists.isAttacked = true;
        penguins.isAttacked = false;
        communists.population -= damageOnHit;
        if (communists.population > 0) {
            console.log(name + " took " + damageOnHit + " damage from the nuke! Population remaining..." + communists.population);
        } else if (communists.population <= 0) {
            console.log(name + " took " + damageOnHit + " damage from the nuke! Population remaining..." + 0);
        }
    }
    console.log("************************************************");
}

function onMiss(party) {
    var randomInt = Math.floor(Math.random() * 4);
    var location = ["the ocean", "nearby farmland", "the sky", "space"]
    if (party === penguins) {
        console.log("Penguins shot was way off and went into " + location[randomInt] + "! Prepare for retaliation!!");
        console.log("************************************************");
        sendNuke(communists, onHit, onMiss);
    } else {
        console.log("Communists shot was way off and went into " + location[randomInt] + "! Prepare for retaliation!!!");
        console.log("************************************************");
        sendNuke(penguins, onHit, onMiss);
    }
}

flipCoin();

while (penguins.population > 0 && communists.population > 0) {
    if (penguins.isAttacked === true) {
        sendNuke(penguins, onHit, onMiss);
    } else {
        sendNuke(communists, onHit, onMiss);
    }
}


if (penguins.population < 0) {
    console.log("Communists win!");
} else {
    console.log("Emperor Penguins win!!")
}