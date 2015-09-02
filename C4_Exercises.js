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





