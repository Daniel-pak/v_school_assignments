var goomba = 0;
var boo = 0;
var bomb_omb = 0;
var cheep_cheep = 0;

document.getElementById("pricing_btn1").addEventListener("click", function () {
    cheep_cheep += 1;
    document.getElementById("price").innerHTML = total(goomba, boo, bomb_omb, cheep_cheep);
});

document.getElementById("pricing_btn2").addEventListener("click", function () {
    boo += 1;
    document.getElementById("price").innerHTML = total(goomba, boo, bomb_omb, cheep_cheep);
});

document.getElementById("pricing_btn3").addEventListener("click", function () {
    bomb_omb += 1;
    document.getElementById("price").innerHTML = total(goomba, boo, bomb_omb, cheep_cheep);
});

document.getElementById("pricing_btn4").addEventListener("click", function () {
    goomba += 1;
    document.getElementById("price").innerHTML = total(goomba, boo, bomb_omb, cheep_cheep);
});

function total(goomba, boo, bomb_omb, cheep_cheep) {
    return ((goomba * 5) + (boo * 50) + (bomb_omb * 7) + (cheep_cheep * 11));
}

document.getElementById("clear_btn").addEventListener("click", function () {
    boo = 0;
    goomba = 0;
    bomb_omb = 0;
    cheep_cheep = 0;
    document.getElementById("price").innerHTML = "";
    document.getElementById("total_string").innerHTML = "";
});

document.getElementById("submit_btn").addEventListener("click", function () {
    document.getElementById("total_string").innerHTML = "You're total price for having caught " + cheep_cheep + " Cheep cheep, " + boo + " boos, " + bomb_omb + " Bomb-ombs and " + goomba + " Goombas is stated above. Please pay via MarioCoins through paypal.";
});

document.getElementById("facebook_btn").addEventListener("click", function() { 
    window.open("https://www.facebook.com/Mario-Brothers-Fans-327993817395980/");
});

document.getElementById("yelp_btn").addEventListener("click", function() { 
    window.open("https://www.yelp.com");
});

document.getElementById("contact_btn").addEventListener("click", function() { 
    document.getElementById("append_contact").innerHTML = "For more information, you may contact me at: marioisaboss@hotmail.com";
})