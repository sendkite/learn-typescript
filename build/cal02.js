"use strict";
//*/
let calAddNumber = (x, y) => x + y;
let calSubNumber = (x, y) => x - y;
let calMultifyNumber = (x, y) => x * y;
let calDevideNumber = (x, y) => {
    if (y <= 0) {
        throw Error("you can't devide a number by negative or zero number");
    }
    return x / y;
};
// console.log(calAddNumber(1, 2));
// console.log(calSubNumber(1, 2));
// console.log(calMultifyNumber(1, 2));
// console.log(calDevideNumber(1, 2));
let doCalculation = (operation) => {
    switch (operation) {
        case 'add':
            return calAddNumber;
        case 'subtract':
            return calSubNumber;
        case 'multify':
            return calMultifyNumber;
        case 'devide':
            return calDevideNumber;
    }
    throw Error("wrong input!!!");
};
var Operation;
(function (Operation) {
    Operation["ADD"] = "add";
    Operation["SUBTRACT"] = "subtract";
    Operation["MULTIFY"] = "multify";
    Operation["DEVIDE"] = "devide";
})(Operation || (Operation = {}));
console.log(doCalculation(Operation.ADD)(1, 2));
console.log(doCalculation(Operation.SUBTRACT)(1, 2));
console.log(doCalculation(Operation.MULTIFY)(1, 2));
console.log(doCalculation(Operation.DEVIDE)(1, 2));
