var car = {
    brand: 'Honda',
    model: 'Civic',
    numberOfDoors: 4,
    automatic: true,
    color: "blue",
    miles: 0,
};

var answer = prompt("What would you like to know about our car? - brand, model, numberOfDoors, automatic, color, miles");

console.log(car[answer]);