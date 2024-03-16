// initially task set to empty
var tasks = [
    
];

// Todo List
function listTask(){
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task)=>{
        var col = document.createElement("div"); // Change 'col' to 'div'
        col.classList.add("col-xl-3", "col-lg-4", "col-sm-12", "col-md-6", "mb-4");
        col.innerHTML = `
            <div class="card" style="width: 18rem;">
               
                    <h4 class="card-title text-center">${task.title}</h4>
                    <div class="card-body">
                    <button class="btn btn-info" onclick="editTask(${task.id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            </div>
        `;
        taskList.appendChild(col);
    })

}

// Func to Add new task
function addTask(){
   
    const input = document.getElementById("taskInput");
    const title = input.value.trim();
    
    const newTask = {
        id: tasks.length + 1,
        title: title,
    };

    tasks.push(newTask);
    input.value = "";
    listTask();
}

// Func to edit a task
function editTask(id){
    const newTitle = prompt("Enter new one");
    if(newTitle !== null){
        const task = tasks.find((task) => task.id === id);
        if(task){
            task.title = newTitle;
            listTask();
        }
    }
}

// Func to delete a task
function deleteTask(id){
    tasks = tasks.filter((task) => task.id !== id);
    listTask();
}

// Initial list 
listTask();
