"use strict";
class Cal {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
    sub() {
        return this.x - this.y;
    }
    multify() {
        return this.x * this.y;
    }
    devide() {
        return this.x / this.y;
    }
}
console.log(new Cal(1, 2).add());
console.log(new Cal(1, 2).sub());
console.log(new Cal(1, 2).multify());
console.log(new Cal(1, 2).devide());
