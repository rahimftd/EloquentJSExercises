
//Exercise 1: Triangle
var hashStr = "#";

for (var i = 0; i < 7; i++) {
    console.log(hashStr);
    hashStr += "#";
}

//Exercise 2: FizzBuzz
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 > 0) {
        console.log("Fizz");
    } else if (i % 3 > 0 && i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}

//Exercise 3: Chessboard
var size = 16;
var area = size * size;
var nextChar = " ";
var boardStr = "";

for (var i = 1; i <= area; i++) {
    if (i % size === 0) {
        boardStr += nextChar + "\n";
    } else {
        boardStr += nextChar;
        if (nextChar === " ") {
            nextChar = "#";
        } else {
            nextChar = " ";
        }
    }
}

console.log(boardStr);
