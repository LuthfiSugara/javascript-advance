// this concept in arrow function
// Contstructor function
// const Employee = function(){
//     this.name = 'luthfi';
//     this.age = 26;
//     this.sayHello = () => {
//         console.log(`Hello, My name is ${this.name}, and my age is ${this.age} years old`);
//     }
// }

// let luthfi = new Employee;

// Object literal
// const employeeTest = {
//     name: 'luthfi',
//     age: 26,
//     sayHello: () => { //Arrow function not have this concept
//         console.log(`Hello, my name is ${name}, and my age is ${age} years old`);
//     }
// }


const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let size = 'size';
    let caption = 'caption';
    
    if(this.classList.contains(size)){
        [size, caption] = [caption, size];
    }

    this.classList.toggle(size);
    setTimeout(() => {
        this.classList.toggle(caption);
    }, 600);
});

