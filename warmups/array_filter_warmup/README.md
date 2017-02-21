The array_filter_warmup was created to work with prototypes. The premise of the warmup was to create a method to the Array.prototype that works functionally similar to the filter() method. 

The prototype method takes a callback function (the filter parameters) and runs through each of the array items to see if the callback returns true. If it does, it adds this argument to an empty array until the array.length is met and returns all the items that pass true for the if condition. 


