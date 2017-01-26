var goomba = 0;
var boo = 0;
var bomb_omb = 0;
var cheep_cheep = 0;
var coinTune = new Audio('smw_coin.wav');


$("#pricing_btn1").on("click", function () {
    cheep_cheep += 1;
    $("#price").text(total(goomba, boo, bomb_omb, cheep_cheep));
    coinTune.play();
});

$("#pricing_btn2").on("click", function () {
    boo += 1;
    $("#price").text(total(goomba, boo, bomb_omb, cheep_cheep));
    coinTune.play();
});

$("#pricing_btn3").on("click", function () {
    bomb_omb += 1;
    $("#price").text(total(goomba, boo, bomb_omb, cheep_cheep));
    coinTune.play();
});

$("#pricing_btn4").on("click", function () {
    goomba += 1;
    $("#price").text(total(goomba, boo, bomb_omb, cheep_cheep));
    coinTune.play();
});

function total(goomba, boo, bomb_omb, cheep_cheep) {
    return ((goomba * 5) + (boo * 50) + (bomb_omb * 7) + (cheep_cheep * 11));
}

$("#clear_btn").on("click", function () {
    boo = 0;
    goomba = 0;
    bomb_omb = 0;
    cheep_cheep = 0;
    $("#price").text("");
    $("#total_string").text("");
});

$("#submit_btn").on("click", function () {
    if (boo !== 0 || goomba !== 0 || bomb_omb !== 0 || cheep_cheep !== 0) {
    $("#total_string").text("You're total price for having caught " + cheep_cheep + " Cheep cheep, " + boo + " boos, " + bomb_omb + " Bomb-ombs and " + goomba + " Goombas is stated above. Please pay via MarioCoins through paypal.");
    coinTune.play();
    }
});

document.getElementById("facebook_btn").addEventListener("click", function() { 
    window.open("https://www.facebook.com/Mario-Brothers-Fans-327993817395980/");
});

document.getElementById("yelp_btn").addEventListener("click", function() { 
    window.open("https://www.yelp.com");
});

document.getElementById("contact_btn").addEventListener("click", function() { 
    document.getElementById("append_contact").innerHTML = "For more information, you may contact me at: marioisaboss@hotmail.com";
});

$("#toggle").on("click", function(){ 
    $("body").css("background-color", "black");
    $("body").css("color", "white");
});

$("#toggle").on("dblclick", function(){ 
    $("body").css("background-color", "white");
    $("body").css("color", "black");
});