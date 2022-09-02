const taskinput = document.querySelector('.task-input input');
let taskBox = document.querySelector('.task-box');
filters = document.querySelectorAll('.filters span');

let editId;
let isEditedTask = false;

  //app.js:17 Uncaught TypeError: todos.push is not a function at HTMLInputElement.<anonymous>

        // we have to parse this localstorage data to the js object


// getting data from localStorage
let todos = JSON.parse(localStorage.getItem('todo-list'));
        // console.log(todos)

filters.forEach(btn =>{
    btn.addEventListener("click",()=>{
        // console.log(btn);
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id)
    })
})


function showTodo(filter){
    let li = "";
    
    if(todos){
        
        todos.forEach((todo,id) => {
            // console.log(id,todo);

            // if todo is completed,set the isCompleted value to checked
            let isCompleted = todos.status == "completed" ? "checked" : "";

            if(filter == todo.status  || filter == 'all'){

                li += `
                <li class="task">
                <label for="${id}">
                    <input type="checkbox" onclick ="updateStatus(this)" id="${id}" ${isCompleted}>
                    <p class = ${isCompleted}>${todo.name}</p>
                </label>
                <div class="settings">
                    <i onclick = "showMenu(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="task-menu">
                        <li onclick = "editTask(${id},'${todo.name}')"><i class="uil uil-pen"></i>Edit</li>
                        <li onclick = "deleteTask(${id})"><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`
            }
        });
    }
// if li isnot empty, insert
    taskBox.innerHTML = li;
}

showTodo(all);

function showMenu(selectedTask){
    // console.log(selectedTask);
    // getting task menu div
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add('show');

    document.addEventListener('click',e =>{
        // removing show class from the task menu on the document click
        if(e.target.tagName != 'I' || e.target !=selectedTask){
            taskMenu.classList.remove('show');
        }
    });

}


function editTask(taskId,taskName){
    // console.log(taskId,taskName);
    editId = taskId;
    isEditedTask = true;
    taskinput.value = taskName;

}
function deleteTask(deleteId){
    // console.log(deleteId);
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showTodo();
}





function updateStatus(selectedTask){
    

    let taskName = selectedTask.parentElement.lastElementChild;

    if(selectedTask.checked){
        taskName.classList.add('checked');
        //id = 0,1,2,3,
        // updating the status of selected task to completed
        todos[selectedTask.id].status = "completed"
    }
    else{
        taskName.classList.remove('checked');
        todos[selectedTask.id].status = "pending"
    }

    localStorage.setItem("todo-list",JSON.stringify(todos));

    console.log(selectedTask.parentElement.lastElementChild);
}


taskinput.addEventListener('keyup',e =>{
    let userTask = taskinput.value.trim();
    // console.log(todos)
    if(e.key == "Enter" && userTask)
    {
        if(!isEditedTask){ // iseditedTask isnot true
            if(!todos){ // if todos isn't exist, pass an empty array to todos
                todos = []; 
            }

            let taskInfo = {name: userTask, status:"pending"};
            todos.push(taskInfo);
        }
        else{
            isEditedTask = false;
            todos[editId].name = userTask;
        }
        // console.log(userTask);

        taskinput.value = "";
        localStorage.setItem("todo-list",JSON.stringify(todos));

        showTodo();
    }
})

// local storage view

/*

[{name: "Hello this is amit", status: "completed"}, {name: "YouTube", status: "pending"},…]
0: {name: "Hello this is amit", status: "completed"}
1: {name: "YouTube", status: "pending"}
2: {name: "Notes", status: "completed"}
3: {name: "FaceBook", status: "pending"}

*/