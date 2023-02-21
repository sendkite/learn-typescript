// ts만 써서 계산기 만들어보기
interface Calculator {
    x: number,
    y: number
    add(x: number, y: number): number
    sub(x: number, y: number): number
    multify(x: number, y: number): number
    devide(x: number, y: number): number
}

class Cal implements Calculator {
    
    x: number = 0;
    y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(): number {
        return this.x + this.y;
    }

    sub(): number {
        return this.x - this.y;
    }

    multify(): number {
        return this.x * this.y;
    }

    devide(): number {
        return this.x / this.y;
    }
}

console.log(new Cal(1, 2).add());
console.log(new Cal(1, 2).sub());
console.log(new Cal(1, 2).multify());
console.log(new Cal(1, 2).devide());