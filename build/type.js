"use strict";
// 01. 기본형식 number, string, boolean + bigint (es2020)
let flag;
let yes = true;
let no = false;
let x;
let y = 0;
let z = 123.456;
// es2020 이후로 가능
// let big: bigint = 100n; 
let s;
let empty = "";
let abc = 'abc';
// null, void, undefined
let nullValue = null;
let unAssigned = undefined;
function noData() { console.log("this is void"); }
// 02. enum : typescript에만 있음
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus); // 값 표시
console.log(ContractStatus[employeeStatus]); // 이름 표시
// 03. any : 모든 형식을 허용한다. 컴파일 타임 오류를 생성하지 않는다. 
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
// 04. unknown : any 오류 해결하기 위해 등장. unknwon은 조작 불가
let randomValue02 = 10;
randomValue02 = true;
randomValue02 = 'Mateo';
// console.log(randomValue02.name);  // Error: Object is of type unknown
// randomValue02();                  // Error: Object is of type unknown
// randomValue02.toUpperCase();      // Error: Object is of type unknown
// 05. 형식 assertion 'as' : 컴파일러에게 형식 단언, 아래와 같이 unknown도 형식 단언을 통해 사용할 수 있다.
// 06. 형식 가드 'typeof' : if 블록에서 형식 검사 -> 함수는 typeof f === "function", 배열은 Array.isArray(a)
randomValue02.toUpperCase();
if (typeof randomValue02 === "string") {
    console.log(randomValue02.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// 06. 타입 union
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y); // concat은 문자열 합치기 함수
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure";       //* Invalid
