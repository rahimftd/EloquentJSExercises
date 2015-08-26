function min(num1, num2) {
	if (num1 > num2) {
		return num2;
	} else {
		return num1;
	}
}

function isEven(num) {

	if (num < 0) {
		num = num * -1;
	}

	if (num === 0) {
		return true;
	} else if (num === 1) {
		return false;
	} else {
		return isEven(num - 2);
	}
}

function countBs(str) {
    bCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === "B") {
            bCount++;
        }
    }
    
    return bCount;
}

function countChars(str, char) {
    charCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === char) {
            charCount++;
        }
    }
    
    return charCount;
}

