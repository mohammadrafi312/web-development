let todo = [];
let request = prompt("enter the request(add,delete,show,exit");
while(true){
if(request === "quit"){
    console.log("quitting the app");
    break;
}


    if (request === "add"){
        task =prompt ("enter the task");
        task.push(todo);

    }

if(request === "list"){
    console.log(todo);
    // result = prompt(" the list ");
}
}