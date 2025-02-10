/* 7. Write a JavaScript program that uses async/await
 to perform three asynchronous tasks in sequence.*/

function createPromiseDynamically(taskName,time,shouldResolve){
    return new Promise((resolve,reject)=>{
        if(shouldResolve){
            setTimeout(()=>{
                resolve(`${taskName}`);
            },`${time}`)
           
        }
        else{
            reject(`${taskName}`);
        }
    })
}

const Tasks = [{name:"Wash the clothes",time:2000,shouldResolve:true},
    {name:"Fold the clothes",time:2000,shouldResolve:true},
    {name:"Walk the dog ",time:2000,shouldResolve:true},
    {name:"Study Math",time:2000,shouldResolve:true},
    {name:"Study Physics",time:2000,shouldResolve:true},
    {name:"Study Programming",time:2000,shouldResolve:true},
]

async function executeTasks(Tasks){
    for(let task of Tasks){
        try{ 
        const promise = await createPromiseDynamically(task.name,task.time,task.shouldResolve);
        console.log(promise);
        }
        catch(e){
            console.error(e);
        }
        };
}

executeTasks(Tasks);