// class with overloads and default values
class Point {
    x: number = 0;
    y: number = 0;
    constructor(x: number, y: number);
    constructor(xy: string);
    constructor(x: string | number, y: number = 0) {
    }
}
class Base {
    k = 4;
}
// Derived class using super() like in Java
class Derived extends Base {
    constructor() {
        super();
        console.log(this.k);
    }
}

// getters and setters using 'this'
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

// Base class method and derived class method
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
d.move();
d.woof(3);
