interface Task{
    id: number,
    text: string
}

const inputs = document.querySelector('input') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const tasklist = document.getElementById('task-list') as HTMLElement

let task: Task[] = [];


button.addEventListener("click", function(){
    const query = inputs.value
    inputs.value = ""

    if(query.trim() == ""){
        alert("no value entered!");
        throw new Error("empty input field error");
    }

    //Create a new task object
    const taskObj : Task = {
        id: Date.now(), 
        text: query
    }


})