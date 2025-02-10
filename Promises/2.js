/*Write a JavaScript function that uses a chain of .then()
 calls to perform a series of asynchronous tasks. */


function walkTheDog(){
    const walkDogToday = new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Dog Walked!");
        },2000)
        
    });

    return walkDogToday;
}

function doChores(){
    const doChoresToday = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Chores done");
        },3000)
        
    })

    return doChoresToday;
}

function goWalking(){
    const goWalkingToday = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Went walking");
        },2000)

        
    })
    return goWalkingToday;
}


walkTheDog().then((message)=>{
    console.log(message);
    return doChores();
}).then((message)=>{
    console.log(message);
    return goWalking();
}).then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("All tasks done!");
})