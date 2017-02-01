var lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz1234567890";

function palindrome(str) {
    str = str.toLowerCase();
    var empty ="";
    for (var x = 0; x < str.length; x++) { 
        if (lettersAndNumbers.indexOf(str[x]) >= 0) { 
            empty += str[x];
        }
    }
    if (empty.length % 2 === 1) {
        var length = Math.floor(empty.length / 2);
        for (var i = 0, j = empty.length - 1; i < length; i++, j--) {
            var frontCheck = empty[i];
            var endCheck = empty[j];
            if (frontCheck !== endCheck) {
                return false;
            }
        }
        return true;
    } else {
        var length = Math.floor(empty.length / 2);
        for (var i = 0, j = empty.length - 1; i < length; i++, j--) {
            var frontCheck = empty[i];
            var endCheck = empty[j];
            if (frontCheck !== endCheck) {
                return false;
            }
        } return true;
    } 
}


console.log(palindrome("Star Rats!"));  // true  
console.log(palindrome("palindrome"));  // false  
console.log(palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true 
console.log(palindrome("Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!"));