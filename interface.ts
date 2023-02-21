// 01. interface란? 덕 타입 형식 지정, 구조적 하위 형식 지정 쉽게 풀면 형식을 설명해주는 것
interface Employee02 {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee02 = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function (): string {
        return this.firstName + " " + this.lastName;
    }
}

// 02. 인터페이스 상속 + optional, readonly 
interface IceCream {
    flavor: string;
    scoops: number;
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

// 03. 인덱싱이 가능한 interface
interface IceCreamArray {
    [index: number]: string
}

let yourIceCream: IceCreamArray;
yourIceCream = ['chocolate', 'strawberry']
let yourFlaver = yourIceCream[0]
console.log(yourFlaver)