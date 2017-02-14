function Location() {
    this.isShip = randomLocation();
    this.hit = false;
    this.display = "O";
}

function randomLocation() {
    var number = Math.floor(Math.random() * (5 - 0) + 1);
    if (number === 1) {
        return true;
    } else { 
        return false;
    }
}



module.exports = Location;