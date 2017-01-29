$(document).keypress(function(e) {
    if(e.which === 13) {
        submit();
    }
});

$("#submit").on("click", submit);

function submit() { 
    var item = $("#item_here").val();
    $("#list").prepend(`<li>${item}<button class="" id="remove">x</button></li>`);
    $("#item_here").val("");
    $("#item_here").focus();

    localStorage.setItem(item, item);
}





$(document).on("click", "#remove", function () {
    $(this).parent('li').remove();
    var item = $(this).parent('li').text();
    var deletedItem = item.substring(0, item.length - 1)
    localStorage.removeItem(deletedItem); 
});


