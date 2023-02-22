"use strict";
// 01. 클래스 정의
class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    // Methods
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
Car.numberOfCars = 0; // 정적 속성 정의
// 02. 클래스 인스턴스
let myCar01 = new Car('Benz', 'blue', 2);
let myCar02 = new Car('hyundai', 'red');
console.log(myCar01.accelerate(35));
console.log(myCar01.brake());
console.log(myCar01.turn('right'));
console.log(Car.getNumberOfCars());
// 03. 상속
class ElectricCar extends Car {
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    charge() {
        console.log(this.worker() + " is charging.");
    }
}
