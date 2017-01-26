document.getElementById("submit").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var game = document.getElementById("game").value;
    var date = document.getElementById("date").value;
    var hs = document.getElementById("highscore").value;
    var comment = "";
    
    var randomInt = Math.floor(Math.random() * 4);
    var arrayOfInsults = ["Please uninstall cause you suck so bad", "You're butts", "Stop being soo terribad please", "HAHAHAHAHAHAHAHAHA"]
    
    if ($('#trashtalk').is(':checked')) {
        comment = arrayOfInsults[randomInt]
    }

    document.getElementById("tableBody").innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${game}</td>
        <td>${date}</td>
        <td>${hs}</td>
        <td colspan="2">${comment}</td>
    </tr>`;
    
    document.getElementById("name").value = "";
    document.getElementById("game").value = "";
    document.getElementById("date").value = "";
    document.getElementById("highscore").value = "";
});