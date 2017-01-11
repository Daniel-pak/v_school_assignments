console.log("hello")

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop(); 
console.log(fruit.reverse()); //You can use the shift function to remove the first item in the array instead of reversing and reversing again
fruit.pop(); 
console.log(fruit.reverse()); 
//fruit.shift();
fruit.push(fruit.indexOf("orange"));
vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);
console.log(food);
food.splice(4,2);
console.log(food);
console.log(food.reverse());
console.log(food.toString());