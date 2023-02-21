"use strict";
// 01. 함수 사용법
function addNumbersV1(x, y) {
    return x + y;
}
addNumbersV1(1, 2);
// 02. 익명 함수
let addNumbersV2 = function (x, y) {
    return x + y;
};
addNumbersV2(1, 2);
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) { // NaN : Not a Number 숫자가 아님을 표시
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));
// 03. arrow function
let addNumbersV3 = (x, y) => x + y;
// 04. 매개변수 기본 할당, optional
function addNumbersV4(x, y = 25, z) {
    return x + y;
}
console.log(addNumbersV4(1));
console.log(addNumbersV4(1, 2));
// 05. rest 매개변수
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
