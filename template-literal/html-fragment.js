// Html Fragments
// const student = {
//     name: 'luthfi',
//     age: 26,
//     nrp: 123123,
//     email: 'test@mail.com'
// }


// const element = `<div class="mhs">
//     <h2>${student.name}</h2>
//     <span class="nrp">${student.nrp}</span>
// </div>`;

const student = [
    {
        name: 'luthfi',
        email: 'luthfi@mail.com'
    },
    {
        name: 'budi',
        email: 'budi@mail.com'
    },
    {
        name: 'toni',
        email: 'toni@mail.com'
    }
];

const element = `<div class="mhs">
    ${student.map(s => `<ul>
        <li>${s.name}</li>
        <li>${s.email}</li>
    </ul>`).join('')}
</div>`;

document.body.innerHTML = element;


// Condition / Ternary
const songs = {
    title: 'song 1',
    singer: 'singer 1',
    featuring: 'singer 2'
}

const element2 = `<div class="song">
    <ul>
        <li>${songs.singer}</li>
        <li>${songs.title} ${songs.featuring ?  `(featuring. ${songs.featuring})` : ''}</li>
    </ul>
</div>`;

document.body.innerHTML = element2;


// Nested Html Fragment
const teacher = {
    name: 'luthfi',
    semester: 5,
    subject: [
        'Mathematics',
        'geology',
        'music'
    ]
};

function printSubject(subject){
    return `
    <ol>
        ${subject.map(s => `<li>${s}</li>`).join('')}
    </ol>
    `;
}

const element3 = `<div class="teacher">
    <h2>${teacher.name}</h2>
    <span class="semester"> Semester : ${teacher.semester}</span>
    <h4>Subject : </h4>
    ${printSubject(teacher.subject)}
</div>`;

document.body.innerHTML = element3;