var nos_energy_drink = {
    isCan: true,
    color: ["blue", "orange", "white"],
    typeOfCan: "Aluminum",
    numOfCans: 2,
    drink: function () {
        this.numOfCans--;
        console.log("You have " + this.numOfCans " left");
    }
}

var macbook = {
    isNeeded: true,
    color: "Silver",
    typesOfMac: ["Macbook", "Macbook Pro", "Macbook Air"],
    computersPresent: 13,
    allMacs: function () {
        for (var i = 0; i < macbook.typesOfMac.length; i++) {
            console.log('The ' + macbook.typesOfMac[i] + " is acceptable here at V School");
        };
    }
}

var lightFixture = {
    isOn: true,
    isAutomatic: true,
    typeOfLights: "flourescent",
    isCeilingFixture: true,
    turnOffLights: function () {
        lightFixture.isOn = false;
        console.log('The light fixtures are now off');
    }
}

var computerSecondScreen = {
    type: "Asus",
    isOn: false,
    use: "For Second Screen",
    turnOnScreeen: function () {
        computerSecondScreen.isOn = true;
        console.log("The second screen is now on");
    }
}

var VSchool = {
    isInSession: true,
    hasAllStudentsPresent: false,
    lessons: "HTML, CSS, JavaScript",
    speak: function () {
        console.log('At V School we have learned ' + VSchool.lessons + " so far!");
    }
}

var person = {
    firstName: "Bob",
    lastName: "Ziroll",
    isInstructor: true,
    introduction: function () {
        console.log("Good Morning class! My name is " + person.firstName + " " + person.lastName + " and I'll be the lead instructor throughout your 12 week course.")
    }
}

var desk = {
    material: "Wood",
    numOfLegs: 4,
    hasOutlets: true,
    property: function () {
        console.log("The desks at V School have " + desk.numOfLegs + " legs per table.");
    }
}

var window = { 
    numOfPanels: 6, 
    material: "glass and wood", 
    isClosed: true, 
    openWindow: function() { 
        this.isClosed = false; 
        console.log("The windows are now open! Get some fresh air!");
    }
}

var myMacBookPro = { 
    isDecorated: true, 
    sizeInInches: 15.5,
    hasCover: true, 
    removeProtection: function (){ 
        myMacBookPro.hasCover = false; 
        console.log("You MacBook no longer has its' cover! Please be very careful!");
    }
}

var coffeeMachine = { 
    color: "Black",
    isBrewing: false, 
    isCleaned: false, 
    turnOn: function() { 
        this.isBrewing = true; 
        console.log("Your coffee is now brewing! Please come back in 2 minutes to grab a fresh cup!"); 
    }, 
    clean: function() { 
        this.isCleaned = true; ;
        console.log("Your machine is cleaned and ready to brew some fresh coffee! Please turn on the machine");
    }
}