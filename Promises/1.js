/*Write a JavaScript function that returns a Promise that resolves
 with a " Hello, World!" message after 1 second. */

function returnPromise(){
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve({message:"Hello world!"}); 
            }
            else{
                reject("Promise not resolved after 1 second");
            }
        },1000)
    })
    return myPromise;
}

//Traditional way to consume this promise
returnPromise().then((messagePromiseResolved)=>{
    console.log(messagePromiseResolved.message);
}).catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("Promise completed");
})
//Using async/await to consume this promise

async function consumingPromise(){
    try{
        let objectFromPromiseResolve = await returnPromise();
        console.log(objectFromPromiseResolve.message);
    }catch(error){
        console.error(error);
    }
    finally{
        console.log("Promisse completed");
    }
}

consumingPromise();




