function firstRepeat(str) {
    var empty = [];
    var dupes = [];
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            empty.push(str[i]);
            break;
        } else if (str.indexOf(str[i]) >= 0 && str.lastIndexOf(str[i]) > 0) {
            dupes.push(str[i]);
        }
    }
    console.log(empty);
}

firstRepeat(str);
firstRepeat(string);