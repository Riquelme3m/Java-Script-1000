/**5. Write a JavaScript program that takes an array of Promises 
 * and logs both resolved and rejected results using Promise.allSettled() */

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Promise got resolved");
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Promise got resolved");
});
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000,"Promise got rejected");
});

const promises = [promise1,promise2,promise3];

function testingAllSettled(arrayOfPromises){
    return Promise.allSettled(arrayOfPromises);
}

testingAllSettled(promises).then((result)=>{
    result.forEach((element,index,result)=>{
        console.log(element);
    })
}).catch((e)=>{
    console.error(e);
})