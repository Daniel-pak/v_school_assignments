var timer = document.getElementById("timer");
var countDown = 10; 
var intervalId;
function UpdateTime() { 
    timer.textContent = countDown;
    countDown--;
    if (countDown === 0) { 
        clearInterval(intervalId);
    }
}

intervalId = setInterval(UpdateTime, 1000);