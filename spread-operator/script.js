// Spread Operator
// Split iterable become single element

// combine two array or more
const student = ['luthfi', 'budi', 'toni'];
const teacher = ['teacher 1', 'teacher 2'];
const people = [...student, 'sugara', ...teacher];
console.log(people);


// Copy Array
const driverCar = ['driver 1', 'driver 2', 'driver 3'];
const driverTruck = [...driverCar];
driverCar[0] = 'driver test';
console.log(driverTruck);

const liEmployee = document.querySelectorAll('li');
// const employee = [];
// for(let i = 0; i < liEmployee.length; i++){
//     employee.push(liEmployee[i].textContent);
// }
// console.log(employee);

const employee = [...liEmployee].map(e => e.textContent);
console.log(employee);


const name = document.querySelector('.name');
const char = [...name.textContent].map(c => `<span>${c}</span>`).join('');
name.innerHTML = char;
console.log(char);
