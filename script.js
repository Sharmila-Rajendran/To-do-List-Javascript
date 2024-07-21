function todolist(){
    var AddTask=document.getElementById("add");
    var ListTask=document.getElementById("newlist");
    if(AddTask.value.trim()==="" || AddTask.value.trim()===null){
        alert("Please enter a task");
        return false;
    }

    var tasks=document.createElement('div');
    tasks.className="row";
    tasks.innerHTML= 
    `<div class="col-9">
        <input type="text" name="tsks" class="list-value" value="${AddTask.value}" readonly>
    </div>
    <div class="col-3">
        <button class="deletebutton" type="submit" onclick="deleteTask(this)">DELETE</button>
    </div>`;
    ListTask.appendChild(tasks);
    AddTask.value="";
}

function deleteTask(button){
    var tasks=button.parentElement.parentElement;
    tasks.remove();
}
