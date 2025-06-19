var inputs = document.querySelector('input');
var button = document.querySelector('button');
var taskList = document.getElementById('task-list');
var task = [];
//Check if there is any task data in the localstorage
var localStoragedata = localStorage.getItem("task array");
if (localStoragedata !== null) {
    var ogdata = JSON.parse(localStoragedata);
    task = ogdata;
    maketodo();
}
button.addEventListener("click", function () {
    var query = inputs.value;
    inputs.value = "";
    if (query.trim() == "") {
        alert("no value entered!");
        throw new Error("empty input field error");
    }
    //Create a new task object
    var taskObj = {
        id: Date.now(),
        text: query
    };
    task.push(taskObj);
    localStorage.setItem("task array", JSON.stringify(task));
    maketodo();
});
function maketodo() {
    taskList.innerHTML = "";
    var _loop_1 = function (i) {
        var _a = task[i], id = _a.id, text = _a.text;
        var element = document.createElement('div');
        element.innerHTML = "\n            <span class=\"task\">".concat(text, "</span>\n            <span class=\"delete\">\n                <i class=\"fa-solid fa-trash\"></i>\n            </span>\n        ");
        // Handle the delete button click event
        var deleteButton = element.querySelector('.delete');
        deleteButton.addEventListener("click", function () {
            // Remove the task from the array based on its ID
            var filteredarray = task.filter(function (taskobj) { return taskobj.id !== id; });
            task = filteredarray;
            localStorage.setItem("task array", JSON.stringify(task));
            taskList.removeChild(element);
        });
        element.classList.add('todo');
        taskList.appendChild(element);
    };
    for (var i = 0; i < task.length; i++) {
        _loop_1(i);
    }
}
