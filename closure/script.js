function init(){
    // let name = 'luthfi'; //local variable
    return function(name){ //inner function (closure*)
        console.log(name); //access to parent variable
    }
}

let callName = init();
callName('luthfi');
callName('sugara');


// Another example of closure
function sayHello(time){
    return function(name){
        console.log(`Hello ${name}, good ${time}`);
    }
}

let sayGoodMorning = sayHello('morning');
let sayGoodAfternoon = sayHello('afternoon');
let sayGoodNight = sayHello('night');

sayGoodMorning('luthfi');


// Another example with invoked Function Expressions (IIFE)
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());