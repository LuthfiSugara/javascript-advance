// How to make object i javascript
// 1. Object Literal
// Problem : Not effective for many objects
let student = {
    name: 'luthfi',
    energy: 10,
    eat: function(amount){
        this.energy = this.energy + amount;
        console.log(student);
    }
}

// 2. Function Declaration & Object.create
const methodEmployee = {
    eat: function(amount){
        this.energy += amount;
        console.log(`${this.name}, eat some food`);
    },
    work: function(hour){
        this.energy -= hour;
        console.log(`${this.name}, play games`);
    },
    sleep: function(hour){
        this.energy += hour * 2;
        console.log(`${this.name}, have double energy after sleep`);
    }
}

function Employee(name, energy){
    let employee = Object.create(methodEmployee);
    employee.name = name;
    employee.energy = energy;

    return employee;
}

let employee1 = Employee('Luthfi', 15);
let employee2 = Employee('BUdi', 10);


// 3. Constructor Function
// Keyword new
function Driver(name, energy){
    this.name = name;
    this.energy = energy;
}

Driver.prototype.eat = function(amount){
    this.energy += amount;
    console.log(`${this.name}, eat some food`);
}

Driver.prototype.drive = function(hour){
    this.energy -= hour;
    console.log(`${this.name}, drive a car`);
}

let driver = new Driver('luthfi', 10);


// Class version
class Gamer {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        this.energy += amount;
        console.log(`${this.name}, eat some food`);
    }
    
    playGame(hour){
        this.energy -= hour;
        console.log(`${this.name}, drive a car`);
    }
}

let gamer1 = new Gamer('luthfi', 10);