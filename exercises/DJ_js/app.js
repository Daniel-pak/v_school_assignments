window.addEventListener('scroll', function() {
    document.getElementById("color_changer").style.backgroundColor = 'orange';
});

document.getElementById("color_changer").addEventListener("dblclick", function () {
    document.getElementById("color_changer").style.backgroundColor = "green";
});

document.getElementById("color_changer").addEventListener("mouseenter", function () {
    document.getElementById("color_changer").style.backgroundColor = "blue";
});

document.getElementById("color_changer").addEventListener("mouseleave", function () {
    document.getElementById("color_changer").style.backgroundColor = "white";
});

document.getElementById("color_changer").addEventListener("mousedown", function () {
    document.getElementById("color_changer").style.backgroundColor = "red";
});

document.getElementById("color_changer").addEventListener("mouseup", function () {
    document.getElementById("color_changer").style.backgroundColor = "yellow";
});

window.addEventListener("keydown", keyDownColorChange, false);

function keyDownColorChange(e) {
    var keyCode = e.keyCode;
    if (keyCode === 79) {
        document.getElementById("color_changer").style.backgroundColor = "orange";
    } else if (keyCode === 82) {
        document.getElementById("color_changer").style.backgroundColor = "red";
    } else if (keyCode === 89) {
        document.getElementById("color_changer").style.backgroundColor = "yellow";
    } else if (keyCode === 87) {
        document.getElementById("color_changer").style.backgroundColor = "white";
    } else if (keyCode === 66) { 
        document.getElementById("color_changer").style.backgroundColor = "blue";
    } else if (keyCode === 71) { 
        document.getElementById("color_changer").style.backgroundColor = "green";
    }
}