// Destructuring Assignment

// Destructuring Array
const introduction = ['Hello', 'My', 'Name', 'Luthfi'];

// const [regards, one, two, name] = introduction;
const [regards, , , name] = introduction;

console.log(regards);


// Swap
let a = 5;
let b = 4;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);


// return value in function
function test(){
    return [1, 2];
}
const [arrA, arrB] = test();
console.log(arrA);


// Rest Parameter
const [paramA, ...values] = [1, 2, 3, 4, 5];
console.log(paramA);
console.log(values);


// Desctructuring Object
const student = {
    studentName: 'luthfi',
    studentAge: 26
}

const {studentName, studentAge} = student;
console.log(name);


// Assignment without declaration object
({paramName, paramaAge} = {
    paramName: 'luthfi',
    paramaAge: 26
});

console.log(paramName);


// Assign to new variable
const driver = {
    driverName: 'Budi',
    driverAge: 36
}

const {driverName: dn, driverAge: da} = driver;
console.log(dn);


// Give default value
const employee = {
    employeeName: 'Toni',
    employeeAge: 36
}

const {employeeName, employeeAge, employeeEmail = 'default@mail.com' } = employee;
console.log(employeeEmail);

// Take field in object, after send as parameter for function
const friends = {
    id: 1,
    name: 'joko',
    age: 23,
    email: 'joko@mail.com'
}

function getIdFriends({id}){
    return id;
}

console.log(getIdFriends(friends));