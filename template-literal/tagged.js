// Tagged Templates
const name = 'luthfi';
const age = 26;

function testing(strings, ...values){
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str1 = testing`Hello, my name is ${name}, and my age is ${age} years old`;
console.log(str1);


// Highlight
const hlName = 'luthfi';
const hlAge = 26;
const hlEmail = 'luthfi@mail.com'

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str2 = highlight`Hello, my name is ${hlName}, and my age is ${hlAge} years old, and my email is ${hlEmail}`;

document.body.innerHTML = str2;