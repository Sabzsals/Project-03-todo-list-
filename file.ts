#! usr\bin\evn node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList: string[] = [];
let conditions = true;

//Print Welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<<<================================>>>>>`));

console.log(`\n\tWelcome to the World Of Sabzsals . Todo-List Application\n`);

console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<<<================================>>>>>\n`));

//while(conditions){
   // let addTask = await inquirer.prompt([
       // {
           // name: "task",
           // type: "input",
           // message: chalk.green("Enter Your New Task :")
       // }
   // ]);
   // todoList.push(addTask.task);
   // console.log(`\n "${chalk.cyanBright.bold(addTask.task)}" Task /added in Todo-List Successfully\n`);
    //let addMoreTask = await inquirer.prompt([
       // {
          //  name: "addmore",
           // type: "confirm",
           // message: chalk.redBright("Do you want to add more task?"),
           // default: "false"
       // }
   // ]);
   // conditions = addMoreTask.addmore;
//    }
// console.log("\nYour updated Todo-list:" , todoList);

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type:"list",
                message: "Select an option you want to do:",
                choices: ["Add Task" , "Delete Task" , "Update Task" , "View Todo-List" , "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "DeleteTask"){
            await deleteTask()
        }

        else if (option.choice === "View Todo-List"){
            await viewTask()
        }
        else if (option.choice === "Exit"){
            conditions = false;
        }
    }
}

//Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in TodoList`);
}

//Function to view all todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
}

//Function to delete a task from the list
let deleteTask = async () => {
    await viewTask()
let taskIndex = await inquirer.prompt([
       {
        name: "index",
        type: "number",
        message: "Enter the 'index no.' of the task you want to delete :",
       }     
        ]);
        let deletedTask = todoList.splice(taskIndex.index, 1);
        console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List\n`);
    
}

main();
