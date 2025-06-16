interface Task{
    id: number,
    text: string
}

const inputs = document.querySelector('input') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const tasklist = document.getElementById('task-list') as HTMLElement

let task: Task[] = [];