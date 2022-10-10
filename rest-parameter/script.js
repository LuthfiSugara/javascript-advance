// Rest Parameter

function myFunc(...args){
    return args;
    // return Array.from(arguments);
    // return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));


function countNumber(...number){
    // let total = 0;
    // for(n of number){
    //     total += n;
    // }
    // return total;

    return number.reduce((a, b) => a + b);
}

console.log(countNumber(1, 2, 3, 4, 5));


// Array destructuring
const group = ['luthfi', 'budi', 'toni'];
const [people1, people2, ...other] = group;
console.log(other);


// Object destructuring
const team = {
    pm: 'Luthfi',
    frontEnd: 'budi',
    backEnd: 'Toni',
    ux: 'Andre',
    devOps: 'Tomi'
}

const {pm, ...myTeam} = team;
console.log(myTeam);


// Filtering
function filterBy(type, ...values){
    return values.filter(f => typeof f === type);
}

console.log(filterBy('number', 1, 2, false, 10, true, 'Doddy'));
console.log(filterBy('string', 1, 2, false, 10, true, 'Doddy'));