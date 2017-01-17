document.getElementById("addition_btn").addEventListener("click", function () { 
    var value1 = document.getElementById("addition1").value;
    value1 = parseInt(value1);
    var value2 = document.getElementById("addition2").value; 
    value2 = parseInt(value2);
    document.getElementById("addition_answer").textContent = (value1 + value2);
});

document.getElementById("subtraction_btn").addEventListener("click", function () { 
    var value1 = document.getElementById("subtraction1").value;
    value1 = parseInt(value1);
    var value2 = document.getElementById("subtraction2").value; 
    value2 = parseInt(value2);
    document.getElementById("subtraction_answer").textContent = (value1 - value2);
});

document.getElementById("multiplication_btn").addEventListener("click", function () { 
    var value1 = document.getElementById("multiplication1").value;
    value1 = parseInt(value1);
    var value2 = document.getElementById("multiplication2").value; 
    value2 = parseInt(value2);
    document.getElementById("multiplication_answer").textContent = (value1 * value2);
});