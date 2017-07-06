// Task 1
function firstCharToUpperCase(str) {
    return (str[0].toUpperCase() + str.slice(1));
}

// Task 2
function checkForSubstring(str, subStr) {
    var position = 0, substringCount = 0;
    while (true) {
        position = str.indexOf(subStr, position);
        if (position == -1) break;
        substringCount++;
        position++;
    }
    return substringCount;
}

// Task 3
function splitString(str, maxLength) {
    if (str.length > maxLength) {
        var newStr = "";

        for (var i = 0; i < str.length-maxLength; i++) {
            newStr += ".";
        }

        return str.substr(0, maxLength) + newStr;
    }
    return str;
}

// Task 4
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Task 5
function fibonacci(number) {
    var n = 1, nPlusOne = 1;

    for (var i = 3; i <= number; i++) {
        var tmp = n;
        n = nPlusOne;
        nPlusOne = n + tmp;
    }
    return nPlusOne;
}

// Task 6
function changeDirection(str) {
    return str.split("").reverse().join("");
}

// Task 7
function theLongestWord(str) {
    var arrOfWords = str.split(" "), maxLength = 0, numberOfTheLongestWord;

    arrOfWords.forEach( function (item, i, arr) {
        if(item.length > maxLength) {
            maxLength = item.length;
            numberOfTheLongestWord = i;
        }
    });
    return arrOfWords[numberOfTheLongestWord];
}

// Task 8
function factorial(numb) {
    var result = 1;
    for (var i = 1; i <= numb; i++) {
        result *= i;
    }
    return result;
}
