var form = document.getElementById("travel_form");

var checkedValue = null; 
var inputElements = document.getElementsByName('diet');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}
document.getElementById("btn").addEventListener("click", function () {
    var fn = document.getElementById("first_name").value;
    var ln = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var gender = form.elements.gender.value;
    var textbox = document.getElementById("comments").value;
/*
    var destination = form.elements.destination.value;
*/
/*
    var diet = form.elements.diet.value;
*/

    alert("First name: " + fn + "\nLast name: " + ln + "\nAge: " + age + "\nGender: " + gender /*+ "\nDestination: " + destination + "\nDiet Restrictions: " + diet)*/);

});