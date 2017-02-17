var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Franklin", 
        email: "franklin@gmail.com", 
        numFriends: 305
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 400
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 20
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 4000
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 8000
    }
]


function combiningAccounts(array) {
    var keys = Object.keys(array[0]);
    var name = keys[0];
    var email = keys[1];
    var numFriends = keys[2];
    for (var i = 0; i < array.length - 1; i++) {
        var newObject = {};
        for (var j = 1; j < array.length; j++) {
            if (array[i][name] === array[j][name] && array[i][email] === array[j][email] && i != j) {
                newObject = {
                    name: array[i][name],
                    email: array[i][email],
                    numFriends: array[i][numFriends] + array[j][numFriends]
                }
                array.splice(i, 1);
                array.splice(j - 1, 1);
                array.push(newObject);
                i = 0;
                j = 0;
            }
        }
    }
    return array;
}

console.log(combiningAccounts(people))