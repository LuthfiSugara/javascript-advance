// Template Literals / Template String
const name = 'Luthfi';
const age = 26;
console.log(`Hello, My name is ${name}, and my age is ${age} years old`);


// Embedded Expression
console.log(`${1 + 1}`);
// console.log(`${alert('Hello')}`);
const x = 10;
console.log(`${x % 2 == 0 ? 'even' : 'odd'}`);

// Html Fragments
const student = {
    name: 'luthfi',
    age: 26,
    nrp: 123123,
    email: 'test@mail.com'
}

const element = `<div class="mhs">
    <h2>${student.name}</h2>
    <span class="nrp">${student.nrp}</span>
    </div>`;
console.log(element);