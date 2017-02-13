var readline = require("readline-sync");

var timeEra;

introduction();


function introduction() {
    console.log('Hello and good day to you! Welcome to the time machine elevator - My name is Chauncy and I have the pleasure of assisting you today.')
    var answer = readline.question('The floor list is as follow \n1.Ancient Civilization Era \n2.Pre-industrial Era \n3.The industrial Age \n4.The Modern Civilization  \n5.The New Millenia\n--');
    timeEra = answer;
    if (timeEra <= 5) {
        console.log("Great choice sir! Just remember you are only alloted 15 minutes here... so therefore you should be careful in what you do - You have one action and only one action at a time.")
    };
    timeTravel(answer);
}

function timeTravel(number) {
    switch (number) {
    case '1':
        console.log("It is the Golden Age of Roma, the peak of art, science and a peaceful time between people.");
        var action = readline.question("Would you like to -\n1.Grab some food \n2.Explore a bit \n3.Introduce yourself to someone \n4.Slaughter them all! \n5.Get back in the time machine \n");
        playOne(action);
        break;
    case '2':
        console.log("It is a shakey period of exploration, much is being learned about the world in this time. The world is not flat they say - HA - what fool would ever think that?");
        var action = readline.question("Would you like to -\n1.Grab some food \n2.Explore a bit \n3.Introduce yourself to someone \n4.Slaughter them all! \n5.Get back in the time machine \n");
        playOne(action);
        break;
    case '3':
        console.log("It is a time of great producion, mass production to be exact, the hustle and bustle of the working class, everyone has a job and no time to talk here.");
        var action = readline.question("Would you like to -\n1.Grab some food \n2.Explore a bit \n3.Introduce yourself to someone \n4.Slaughter them all! \n5.Get back in the time machine \n");
        playOne(action);
        break;
    case '4':
        console.log("You are back - boringgg!.");
        var action = readline.question("Would you like to -\n1.Grab some food \n2.Explore a bit \n3.Introduce yourself to someone \n4.Slaughter them all! \n5.Get back in the time machine \n");
        playOne(action);
        break;
    case '5':
        console.log("Welcome to the future! Be careful here - please put on this anti-gravity suit so you don't implode. Feel free to do what you'd like here... just don't forget to be aware of your headspace! The cars fly fairly close to you here.");
        var action = readline.question("Would you like to -\n1.Grab some food \n2.Explore a bit \n3.Introduce yourself to someone \n4.Slaughter them all! \n5.Get back in the time machine \n");
        playOne(action);
        break;
    default:
        console.log("Sorry - you chose a floor that doesn't exist! \nYou are thrown out of the elevator!")
    }
}

function playOne(number) {
    switch (number) {
    case '1':
        if (timeEra === '1') {
            console.log("You head into a shop looking for food... \nhowever, everything looks primitive and to be frank\nvery unsafe... You grab the only thing that looks familiar\na glass of wine! Cheers!");
        } else if (timeEra === "2") {
            console.log("You head to the nearest pub to grab a meal the menu? \nBoiled chicken with no seasoning and \nhomemade ale. You order and realize you have no money... \nYou eat and when asked to pay you run for your life!!!!\nThey can't catch you anyways right?")
        } else if (timeEra === "3") {
            console.log("You're in the big city and you see something that's very familiary - \nthe golden arches! You run and grab a Coca-cola with a classic McDouble... \nYou finish your meal and feel really weird... lot's of energy kicking in")
        } else if (timeEra === '4') {
            console.log("You're familiar with everything... Take your pick!")
        } else if (timeEra === "5") {
            console.log("You walk into what looks like a dinner, a robot asks you for your meal\nYou ask for chicken fingers and fries and a bell rings\nYou're suddenly 5 pounds heavier and super full!")
        }
        break;
    case '2':
        if (timeEra === '1') {
            console.log("You walk around the open market a bit, picking up items and smelling the fresh fruit. \nYou catch the eye of a very attractive suitor and they grab you by the hand... \n*DING* 15 minutes are up! You start the transition to your time.. becoming transparent..");
        } else if (timeEra === "2") {
            console.log("")
        } else if (timeEra === "3") {
            console.log("")
        } else if (timeEra === '4') {
            console.log("")
        } else if (timeEra === "5") {
            console.log("")
        }
        break;
    default:
        console.log("You chose an action that doesn't exist! The elevator flings you back into your time and you land on your ass outside!");
    }

}