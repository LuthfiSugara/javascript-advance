// Promise
// An object that represents the success or failure of an asynchronous event in the future
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// action (then / catch)


// example 1
let kept = false;
const promise1 = new Promise((resolve, reject) => {
    if(kept){
        resolve('Promise has been fulfilled!');
    }else{
        reject('Promise has been rejected!');
    }
});

promise1
    .then(response => console.log('OK : ' + response))
    .catch(response => console.log('NOT OK : ' + response));


// example 2
let kept2 = true;
const promise2 = new Promise((resolve, reject) => {
    if(kept2){
        setTimeout(() => {
            resolve('Promise has been fulfilled, after a few seconds!');
        }, 2000);
    }else{
        setTimeout(() => {
            reject('Promise has been rejected!');
        }, 2000);
    }
});

console.log('start');
promise2
    .finally(() => console.log('finish waiting'))
    .then(response => console.log('OK : ' + response))
    .catch(response => console.log('NOT OK : ' + response));
console.log('finish');


// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            title: 'Avenger',
            director: 'luthfi',
            actor: 'budi, toni'
        }]);
    }, 1000);
});

const weather = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            city: 'Medan',
            temp: 26,
            condition: 'cloudy'
        }]);
    }, 500);
});

Promise.all([film, weather])
    // .then(response => console.log(response));
    .then(response => {
        const [film, weather] = response;
        console.log(film);
        console.log(weather);
    })