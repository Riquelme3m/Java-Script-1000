/* Write a JavaScript function that takes multiple Promises and resolves with the first 
successful result using Promise.any().*/

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            reject("Promise 1 rejects");
        }
        resolve("Promise 1 fulfills");
    },1000);
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(false){
            reject("Promise 1 rejects");
        }
        resolve("Promise 2 fulfills");
    },500);
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"Gets resolved"); //Different way to write setTimeOut
})

const arrayOfPromises = [promise1,promise2,promise3];

function multiplePromises(promises){
    return Promise.any(promises);
}


multiplePromises(arrayOfPromises).then((m)=>{
    console.log(m);
}).catch((e)=>{
    console.error(e);
})