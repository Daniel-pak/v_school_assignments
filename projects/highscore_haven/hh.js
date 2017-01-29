document.getElementById("submit").addEventListener("click", function () {

    var name = document.getElementById("name").value;
    var game = document.getElementById("game").value;
    var date = document.getElementById("date").value;
    var hs = document.getElementById("highscore").value;
    var comment = "";

    var randomInt = Math.floor(Math.random() * 4);
    var arrayOfInsults = ["Please uninstall cause you suck so bad", "Oh please, is this your first day?", "Stop being soo terribad please", "HAHAHAHAHAHAHAHAHA"]

    if ($('#trashtalk').is(':checked')) {
        comment = arrayOfInsults[randomInt]
    }

    if (name !== "" && game !== "" && date !== "" && hs > 0) {
        document.getElementById("tableBody").innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${game}</td>
        <td>${date}</td>
        <td>${hs}</td>
        <td colspan="2">${comment}</td>
    </tr>`;
    }
    
    document.getElementById("name").value = "";
    document.getElementById("game").value = "";
    document.getElementById("date").value = "";
    document.getElementById("highscore").value = "";
});

document.getElementById('sort').addEventListener('click', sortTable);

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = document.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[3];
      y = rows[i + 1].getElementsByTagName("td")[3];
      //check if the two rows should switch place:
      x = x.innerHTML;
      y = y.innerHTML;
      x = parseInt(x);
      y = parseInt(y);
      if (y > x) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}