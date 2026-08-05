let todo = [];

let request = prompt("Enter the request (add, list, delete, quit)");

while (true) {

    if (request === "quit") {
        console.log("Quitting the app");
        break;
    }else if (request === "delete") {
        let index = prompt("Enter the index of the task to delete");
        todo.splice(index, 1);
        console.log("Task deleted");
    }

    else if (request === "add") {
        let task = prompt("Enter the task");
        todo.push(task);
        console.log("Task added");
    }

    else if (request === "list") {
        console.log("Todo List:");

        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    }

    else {
        console.log("Invalid request");
    }

    // Ask again
    request = prompt("Enter the request (add, list, delete, quit)");
}