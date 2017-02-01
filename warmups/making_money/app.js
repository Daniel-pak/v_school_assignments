formatMoney(123456789); // returns $1,234,567.89 
formatMoney(12345678993847928);
formatMoney(90);

function formatMoney(num) {
	var n = num.toString();
	var array = n.split("");
	var emptyArray = [];
	emptyArray.push("$");
	for (var i = 0; i < array.length - 2; i++) {
		if (array.length === 1) { 
			array.push("0");
			array.push(array[0]); 
		}
		if ((array.length - 2) % 3 === 1) {
			if (i === 0) {
				emptyArray.push(array[i]);
				emptyArray.push(",");
			} else if (i % 3 === 0 && i !== array.length - 3) {
				emptyArray.push(array[i]);
				emptyArray.push(",");
			} else {
				emptyArray.push(array[i]);
			}
		}
		if ((array.length - 2) % 3 === 2) {
			if (i === 1) {
				emptyArray.push(array[i]);
				emptyArray.push(",");
			} else if (i % 3 === 1 && i !== array.length - 3) {
				emptyArray.push(array[i]);
				emptyArray.push(",");
			} else {
				emptyArray.push(array[i]);
			}
		}
		if ((array.length - 2) % 3 === 0) {
			if (i % 3 === 2 && i !== array.length - 3) {
				emptyArray.push(array[i]);
				emptyArray.push(",");
			} else {
				emptyArray.push(array[i]);
			}
		}
	}
	emptyArray.push(".");
	emptyArray.push(array[array.length - 2])
	emptyArray.push(array[array.length - 1]);
	console.log(emptyArray.join(""));
}

