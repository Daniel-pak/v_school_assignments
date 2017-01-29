var anotherCount = localStorage.getItem("count");
count = anotherCount;

$(document).ready(function() { 
    $("#numberUpdate").text(anotherCount);
})


$('#button').on("click", function() { 
    count++;
    $("#numberUpdate").text(count); 
    localStorage.setItem("count", count);
})

$('#clear_button').on("click", function() { 
    $("#numberUpdate").text("");
    localStorage.removeItem("count");
})


//var timer = document.getElementById("timer");
//var countDown = 10; 
//var intervalId;
//function UpdateTime() { 
//    timer.textContent = countDown;
//    countDown--;
//    if (countDown === 0) { 
//        clearInterval(intervalId);
//    }
//}
//
//intervalId = setInterval(UpdateTime, 1000);


