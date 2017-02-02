var ourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ourArrays = ["pan", "can", "apple", "sauce"];

Array.prototype.myFilter = function(callback) { 
	var array = this;
	var emptyArray = [];
	for (var i = 0; i < this.length; i++) { 
		if (callback(this[i])) {
		emptyArray.push(this[i]);
		}
	}
	return emptyArray;
};

var what = ourArray.myFilter(function(element) { 
	return element <= 5;
})

var whatIsThis = ourArrays.myFilter(function(element) { 
	return element.length < 4;							   
})
									
console.log(what);
console.log(whatIsThis);