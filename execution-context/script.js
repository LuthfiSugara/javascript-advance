// Execution Context, Hoisting & Scope

// let name = 'luthfi';
// console.log(name);

// Creation phase in global context
// make variable with undifined var name = undifined
// name function = fn()
// hoisting
// window = global object
// this = window
// execution phase


var name = 'luthfi';
var age = 10;
console.log(sayHello());

// function make local execution context
// which contains creation and execution context
function sayHello(){
    return `My name is ${name}, i'm ${age} years old`;
}

