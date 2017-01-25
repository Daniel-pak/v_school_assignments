//Given 3 int values, a b c, return their sum. 
//However, if any of the values is a teen -- in the range 13 to 19 inclusive -- then that value counts as 0
//    , except 15 and 16 do not count as a "teens" and should therefore still be added. 
//    
//Write a separate helper function "fixTeen(n)" that takes in an integer value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition").

/*noTeenSum(1, 2, 3) //→ 6 
noTeenSum(2, 13, 1) //→ 3 
noTeenSum(2, 1, 14) //→ 3 
noTeenSum(2, 15, 14) //→ 17*/

function fixTeen(n) { 
    if (n >= 13 && n <= 19) { 
        if (n === 15 || n === 16) { 
            return n;
        } else {
            return 0;
        }
    } else { 
        return n; 
    }
}

//function noTeenSum(a, b, c) { 
//    var num = 0; 
//    num += fixTeen(a);
//    num += fixTeen(b);
//    num += fixTeen(c);
//    console.log(num);
//}

noTeenSum(1, 2, 3, fixTeen) //→ 6 
noTeenSum(2, 13, 1, fixTeen) //→ 3 
noTeenSum(2, 1, 14, fixTeen) //→ 3 
noTeenSum(2, 15, 14, fixTeen) //→ 17

function noTeenSum(a, b, c, callback) { 
    var num = 0; 
    num += callback(a) + callback(b) + callback(c);
    console.log(num);
}


