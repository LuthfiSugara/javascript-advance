const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// find number >= 3
// for
const newNumber = [];
for(let i = 0; i < number.length; i++){
    if(number[i] >= 3){
        newNumber.push(number[i]);
    }
}
// console.log(newNumber);


// Filter
const filter = number.filter((a) => {
    return a >= 3;
});
// console.log(filter);


// map
const map = number.map((a) => {
    return a * 2;
});
// console.log(map);


// reduce
// count all element in array
const reduce = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
// console.log(reduce);


// Method Chaining
// Find number > 5
// time 3
// count
const result = number.filter((a) => {
    return a > 5 ; // 8, 9, 9
})
.map(a => a * 3) // 24, 27, 27
.reduce((acc, cur) => acc + cur); // 78
console.log(result);