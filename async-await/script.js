// const test = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('done');
//     }, 2000);
// });

// console.log('test');
// test.then(() => console.log('test'));

function tryPromise(){
    return new Promise((resolve, reject) => {
        const time = 5000;
        if(time < 5000){
            setTimeout(() => {
                resolve('done');
            }, 2000);
        }else{
            reject('something wrong');
        }
        
    });
}

// const test = tryPromise();
// test
//     .then(test => console.log(test))
//     .catch(test => console.log(test));

async function tryAsync(){
    try{
        const testAsync = await tryPromise();
        console.log(testAsync);
    }catch(err){
        console.log(err);
    }
}

tryAsync();