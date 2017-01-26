var date = new Date();
var seconds1 = date.getSeconds();

var endOfWorldTimer = setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var timer = (seconds1 + 21) - seconds;
    
    if (timer >= 60) { 
        timer = timer - 60;
    }
    
    document.getElementById("text").innerHTML = `00:00:${pad2(timer)}`;

}, 1000);

/*
var endOfWorldTimer = setInterval(function () { 
    var timer = 21; 
    timer--;
    
    document.getElementById("text").innerHTML = timer;
}, 1000);
*/

function clearingTimer(endOfWorldTimer) {
    clearInterval(endOfWorldTimer);
};

var sound = document.getElementById("sound");

setTimeout(function () {
    sound.play();
    document.getElementById("text").innerHTML = "The end of the world has come upon us";
    clearingTimer(endOfWorldTimer);
}, 21000);


function pad2(number) {
     return (number < 10 ? '0' : '') + number
}
