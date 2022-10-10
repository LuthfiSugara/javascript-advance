// for..of

// Array
const student = ['luthfi', 'budi', 'toni'];

// for(let i = 0; i < student.length; i++){
//     console.log(student[i]);
// }

// student.forEach(s => console.log(s));

for(const s of student){
    console.log(s);
}


// String
const name = 'luthfi';

for(n of name){
    console.log(n);
}


student.forEach((m, i) => {
    console.log(`${m} is student-${i + 1}`);
});

for(const [i, s] of student.entries()){
    console.log(`${s} is student-${i + 1}`);
}


// Node list
const liName = document.querySelectorAll('.name');

for(l of liName){
    console.log(l.innerHTML);
}


// Arguments
function countNumber(){
    let total = 0;
    // return arguments.reduce((a, i) => a + i); //can't
    // arguments.forEach(a => total += a); //can't
    for(a of arguments){
        total += a;
    }
    return total;
}

console.log(countNumber(1, 2, 3, 4, 5));