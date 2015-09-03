//The sum of a range

function range(start, end, step) {
	var rangeArr = [];

	if (arguments.length < 3) {
		step = 1;
	}

	if (step > 0) {
		for(var i = start; i <= end; i += step) {
			rangeArr.push(i);
		}
	} else {
		for (var i = start; i >= end; i += step) {
			rangeArr.push(i);
		}
	}

	return rangeArr;
}

function sum(numArr){
	var arrSum = 0;

	for (var i = 0; i < numArr.length; i++) {
		arrSum += numArr[i];
	}
	
	return arrSum;
}

//Reversing an array

function reverseArray(arr) {
	var tempArr = arr.slice(0);
	var newArr = [];

	for (var i = tempArr.length - 1; i >= 0; i--) {
		newArr.push(tempArr[i]);
	}

	return newArr;
}

function reverseArrayInPlace(arr) {
	var tempArr = arr.slice(0);
	var arrIndex = 0;

	for (var i = tempArr.length - 1; i >= 0; i--) {
		arr[arrIndex] = tempArr[i];
		arrIndex++;
	}
}

//A List

function arrayToList(arr) {
	if (arr.length === 0) {
		return null;
	} else {
		return {
			value: arr[0],
			rest: arrayToList(arr.slice(1))
		};
	}
}

function listToArray(list) {
	var tempList = list;
	var arr = [];

	while (tempList.rest !== null) {
		arr.push(tempList.value);
		tempList = tempList.rest;
	}

	arr.push(tempList.value);

	return arr;
}

function prepend(elem, list) {
	return {
		value: elem,
		rest: list
	};
}

function nth(list, index) {
	if (index === 0) {
		return list.value;
	} else if (list.rest === null) {
		return undefined;
	} else {
		return nth(list.rest, index - 1);
	}
}

//In progress:

function deepEqual(val1, val2) {
	if (typeof val1 !== typeof val2) {
		return false;
	} else if (typeof val1 === "object") {
		for (var elem in val1) {
			if (val1[elem] != val2[elem]) {
				return false;
			}
			return true;
		}
	} else {
		return val1 === val2;
	}
}





