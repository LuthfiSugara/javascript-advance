// Callback

// Synchronous Callback
// function halo(name){
//     alert(`Halo, ${name}`);
// }

function printName(callback){
    const name = prompt('Enter name : ');
    callback(name);
}

printName((name) => {
    alert(`Halo, ${name}`);
});


// const student = [
//     {
//         "name": "luthfi",
//         "nrp": "123123",
//         "email": "luthfi@mail.com",
//         "major": "Programming",
//         "idLecturer": 1
//     },
//     {
//         "name": "budi",
//         "nrp": "234234",
//         "email": "budi@mail.com",
//         "major": "Geology",
//         "idLecturer": 2
//     },
//     {
//         "name": "toni",
//         "nrp": "345345",
//         "email": "toni@mail.com",
//         "major": "Engineer",
//         "idLecturer": 2
//     }
// ]

// console.log('start');
// student.forEach(m => {
//     for(let i = 0; i < 1000000; i++){
//         let date = new Date();
//     }
//     console.log(m.name);
// });
// console.log('finish');



// Asynchronous Callback
function getDataTeacher(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response);
            }else if(xhr.status === 400){
                error();
            }
        }
    }


    xhr.open('get', url);
    xhr.send();
}

console.log('start load data teacher');
getDataTeacher('teacher.json', results => {
    const teacher = JSON.parse(results);
    teacher.forEach(t => console.log(t.name));
}, () => {

});
console.log('finish load data teacher');



// Jquery
console.log('start');
$.ajax({
    url: 'teacher.json',
    success: (data) => {
        console.log(data);
    }, error: (err) => {
        console.log(err);
    }
});
console.log('finish');