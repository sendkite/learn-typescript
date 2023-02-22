
// type calculator = (x: number, y: number) => number;
/*
interface CalculatorV2 {
    (x: number, y: number): number;
}
/*/
type CalculatorV2 = (x: number, y: number) => number;
//*/

let calAddNumber: CalculatorV2 = (x: number, y: number) => x + y;
let calSubNumber: CalculatorV2 = (x: number, y: number) => x - y;
let calMultifyNumber: CalculatorV2 = (x: number, y: number) => x * y;
let calDevideNumber: CalculatorV2 = (x: number, y: number) => {
    if (y <= 0) {
        throw Error("you can't devide a number by negative or zero number")
    }
    return x / y
};

// console.log(calAddNumber(1, 2));
// console.log(calSubNumber(1, 2));
// console.log(calMultifyNumber(1, 2));
// console.log(calDevideNumber(1, 2));

let doCalculation = (operation: Operation): CalculatorV2 => {
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
    throw Error("wrong input!!!")
}

enum Operation {
    ADD = 'add',
    SUBTRACT = 'subtract',
    MULTIFY = 'multify',
    DEVIDE = 'devide',
}

console.log(doCalculation(Operation.ADD)(1,2));
console.log(doCalculation(Operation.SUBTRACT)(1,2));
console.log(doCalculation(Operation.MULTIFY)(1,2));
console.log(doCalculation(Operation.DEVIDE)(1,2));