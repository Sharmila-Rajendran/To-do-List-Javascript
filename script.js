var AddTask=document.getElementById("add").value;
var Addbutt=document.getElementById("butt1");
var AddList=document.getElementById("add");
function todolist(){
    if(AddTask==="" || AddTask===null){
        alert("Please enter a task");
        return false;
    }
    else{
        document.getElementById("add").innerHTML="Sharmila will complete the task today";
    }
    
}

function DeleteTask(){
    let listdelete=document.getElementById("tsk");
    let deletebutton=document.getElementById("butt2");
    listdelete.remove();
    deletebutton.remove();
}