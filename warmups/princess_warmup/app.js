/*Requirements:

Create an object for a player that has the following properties:

name of type String
totalCoins of type Number
status of type String (options are Powered Up, Big,Small, and Dead)
star of type Boolean (Is a star active?)
setName of type function - sets name to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
gotHit of type function - this is called whenever Mario is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up")
gotPowerup of type function - called when a powerup is received and sets the status accordingly
gameActive of type Boolean, true by default, becomes false when status is Dead

addCoin of function - adds a coin to totalCoins

print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
Name: Luigi,
Status: Small, etc, etc
Create a random range function that returns either 0, 1, or 2.

If the value is 0 call the gotHit() function on the object. 
If the value is 1 call the gotPowerup() function on the object 
If the value is 2 call the addCoin() function

Then call the print function on the object.

Perform this random operation 3 different times and call that print function 3 different times.*/



var player = {
    name: "",
    totalCoins: 0,
    status: "Small",
    isStarActive: false,
    setName: function (namedPicked) {
        var names = namePicked();
        this.name = names;
    },
    gotHit: function (status) {
        if (this.status === "Small") {
            this.status = "Dead";
            player.gameActive = false;
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Powered up") {
            this.status = "Big";
        }
    },
    gameActive: true,
    addCoin: function (totalCoins) {
        this.totalCoins += 1;
    },
    gotPowerUp: function (status) {
        switch (this.status) {
        case "Small":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Powered up";
            this.isStarActive = true;
            break;
        }
    },
    print: function () {
        console.log("\nName: " + player.name + "\nTotal Coins: " + player.totalCoins + "\nStatus: " + player.status + "\nStar status: " + player.isStarActive);
    }
}

function namePicked() {
    var names = ["Mario", "Luigi"];
    var randomInt = Math.floor(Math.random() * 2);
    return names[randomInt];
}

function randomRange(num) {
    player.setName(namePicked);
    player.print();
    for (var i = 0; i < num; i++) {
        var randomInt = Math.floor(Math.random() * 3);
        if (randomInt === 0) {
            player.gotHit();
        } else if (randomInt === 1) {
            player.gotPowerUp();
        } else {
            player.addCoin();
        }
        player.print();
    }
    
}

randomRange();