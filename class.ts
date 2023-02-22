// 01. 클래스 정의
class Car {
    private static numberOfCars: number = 0; // 정적 속성 정의
    private _make: string;
    private _color: string;
    private _doors: number;

    constructor(make: string, color: string, doors = 4) {
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
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
    public accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    public brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    public turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    }
}

// 02. 클래스 인스턴스
let myCar01 = new Car('Benz', 'blue', 2);
let myCar02 = new Car('hyundai', 'red');
console.log(myCar01.accelerate(35));
console.log(myCar01.brake());
console.log(myCar01.turn('right'));

console.log(Car.getNumberOfCars());

// 03. 상속

class ElectricCar extends Car {

    private _range: number;

    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors)
        this._range = range
    }

    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    charge() {
        console.log(this.worker() + " is charging.")
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());