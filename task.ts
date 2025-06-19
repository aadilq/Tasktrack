interface Task{
    id: number,
    text: string
}

const inputs = document.querySelector('input') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const taskList = document.getElementById('task-list') as HTMLElement

let task: Task[] = [];

//Check if there is any task data in the localstorage
const localStoragedata = localStorage.getItem("task array")

if(localStoragedata !== null){
    const ogdata: Task[] = JSON.parse(localStoragedata);
    task = ogdata;
    maketodo();
}

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

    task.push(taskObj);
    localStorage.setItem("task array", JSON.stringify(task));
    maketodo();


});

function maketodo(): void{
    taskList.innerHTML = "";

    for(let i = 0; i < task.length; i++){
        const {id, text} = task[i];
        const element = document.createElement('div');
        element.innerHTML = `
            <span class="task">${text}</span>
            <span class="delete">
                <i class="fa-solid fa-trash"></i>
            </span>
        `
         // Handle the delete button click event
         const deleteButton = element.querySelector('.delete')!;
         deleteButton.addEventListener("click", function () {
            // Remove the task from the array based on its ID
            const filteredarray = task.filter((taskobj: Task) => taskobj.id !== id);
            task = filteredarray;
            localStorage.setItem("task array", JSON.stringify(task));
            taskList.removeChild(element);
        });

        element.classList.add('todo');
        taskList.appendChild(element);
    
    }
}
