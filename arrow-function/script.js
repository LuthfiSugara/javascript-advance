// Function Expression
// const tampilNama = function(name){
//     return `Hello ${name}`;
// }
// console.log(tampilNama('luthfi'));


// Arrow function with one parameter
// const showName = (name) => { return `Hello ${name}`; }
// console.log(showName('luthfi'));

// Arrow function with one parameter and implicit return
// const showName = name => `Hello ${name}`;
// console.log(showName('luthfi'));

// Arrow function without parameter
// const showName = () => `Hello World!`;
// console.log(showName());

// Arrow function with two parameter
const showName = (name, time) => { 
    return `Hello ${name}, Good ${time}`; 
}
// console.log(showName('luthfi', 'Morning'));


let student = ['Luthfi', 'Sugara', 'Nasution'];
// Return array
// let countCharacter = student.map(name => name.length);
// console.log(countCharacter);

// Return object
let countCharacter = student.map(name => ({name: name, countChar: name.length}));
// console.table(countCharacter);
