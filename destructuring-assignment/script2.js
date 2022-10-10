// Destructuring Function

// Return Array
// function calculation(a, b){
//     return [a + b, a - b, a * b, a / b];
// }

// const sum = calculation(2, 3)[0];
// const multiply = calculation(2, 3)[1];

// const [sum, multiply] = calculation(2, 3);

// const [sum, subtraction, multiply, distibute = 'empty'] = calculation(2, 3);
// console.log(multiply);


// Return Object
function calculation(a, b){
    return {
        plus: a + b,
        minus: a - b,
        multiply: a * b,
        subtraction: a / b
    }
}

const {minus, plus, subtraction, multiply} = calculation(2, 3);
console.log(minus);


// Function arguments
const student = {
    name: 'luthfi',
    age: 26,
    email: 'luthfi@mail.com',
    point: {
        exam1: 80,
        exam2: 90,
        exam3: 88
    }
}

// function printStudent(name, age){
//     return `Hello, my name is ${name}, and my age is ${age} years old.`;
// }
// console.log(printStudent(student.name, student.age));


function printStudent({name, age, point: {exam1, exam2, exam3} }){
    return `Hello, my name is ${name}, and my age is ${age} years old, and get ${exam1 + exam2 + exam3} total point in all exam`;
}
console.log(printStudent(student));