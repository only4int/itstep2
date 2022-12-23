class Person{
    age;
    fullName;

    constructor(age, fullName){
        this.age = age;
        this.fullName = fullName;
    }

    toString(){
        return `Age: ${this.age}, fullName: ${this.fullName}`;
    }

}

class Driver extends Person{
    experience;

    constructor(age, fullName, experience){
        super(age, fullName);

        this.experience = experience;
    }

    toString(){
        return `Age: ${this.age}, fullName: ${this.fullName}, experience: ${this.experience}`;
    }
}

class Engine{
    power;
    company;

    constructor(power, company){
        this.power = power;
        this.company = company;
    }

    toString(){
        return `Power: ${this.power}, Company: ${this.company}`;
    }
}

class Car{
    carClass;
    engine;
    driver;
    marka;

    constructor(carClass, engine, driver, marka){
        this.carClass = carClass;
        this.engine = engine;
        this.driver = driver;
        this.marka = marka;
    }

    start(){
        this.engine.power = 100;
    }

    stop(){
        this.engine.power = 0;
    }

    turnRight(){    
        console.log("Car turn right");
    }

    turnLeft(){
        console.log("Car turn left");
    }

    toString(){
        return `Class: ${this.carClass}, Engine: ${this.engine.toString()}, Driver: ${this.driver.fullName}, ${this.driver.experience}, Marka: ${this.marka}`;
    }
}

class Lorry extends Car{
    carrying;

    constructor(carClass, engine, driver, marka, carrying){
        super(carClass, engine, driver, marka);
        this.carrying = carrying;
    }

    toString(){
        return `Class: ${this.carClass}, Engine: ${this.engine.toString()}, Driver: ${this.driver.fullName}, ${this.driver.experience}, Marka: ${this.marka}, Carrying: ${this.carrying}`;
    }
}

class SportCar extends Car{
    speed;

    constructor(carClass, engine, driver, marka, speed){
        super(carClass, engine, driver, marka);
        this.speed = speed;
    }

    toString(){
        return `Class: ${this.carClass}, Engine: ${this.engine.toString()}, Driver: ${this.driver.fullName}, ${this.driver.experience}, Marka: ${this.marka}, Speed: ${this.speed}`;
    }
}

let engineCar = new Engine(220, "Ferrari");
let driverCar = new Driver(35, "Fernando Alonso", 20);

let car = new SportCar("Sport Car", engineCar, driverCar, "Ferrari", 300);

console.log(car.toString());
car.start();
console.log(car);
car.stop();
console.log(car);
car.engine.power = 200;
car.speed = 350;
console.log(car);
