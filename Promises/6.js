/*Write a JavaScript program that  processes an array of asynchronous 
tasks sequentially using Promises. */




function dynamicPromiseCreation(TaskName, time, shouldResolve=true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`${TaskName}`);
            } else {
                reject("Task not done");
            }
        }, time);
    });
};

const Tasks = [
    { name: "Wakeup at 6am", time: 3000, shouldResolve: true },
    { name: "Go running", time: 3000, shouldResolve: true },
    { name: "Do homework", time: 3000, shouldResolve: true },
    { name: "Go cycling", time: 4000, shouldResolve: false }
];

const processTasksSequentially =  async (Tasks) => {
    for (let task of Tasks){
        try{
            const message = await dynamicPromiseCreation(task.name,task.time,task.shouldResolve);
            console.log(message);
        }
        catch(e){
            console.error(e);
        }
    }
};

processTasksSequentially(Tasks);
