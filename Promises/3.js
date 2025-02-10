/*Write a JavaScript program that demonstrates
 how to catch and handle errors in Promises using .catch(). */


function simulateError(){
    const myPromise = new Promise((resolve,reject)=>{
        let success = true;
        
        setTimeout(()=>{
            if(success){
                resolve("Operation successfully done!!");
            }
            else{
                reject("Operation not done!");
            }
        },3000)
    })
    return myPromise;
}

simulateError().then((message)=>{
    console.log(message);
}).catch((e)=>{
    console.error(e);
}).finally(()=>{
    console.log("Process has finished");
})