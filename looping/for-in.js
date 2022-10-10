// for..in

const student = [
    {
        name: 'luthfi',
        age: 26,
        email: 'luthfi@mail.com'
    },
    {
        name: 'budi',
        age: 25,
        email: 'budi@mail.com'
    }
]

for(s in student){
    console.log(student[s].email);
}