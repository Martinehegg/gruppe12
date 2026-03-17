
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const toDo = document.getElementById("toDo");

addButton.addEventListener('click', addTask)


function addTask(){

    const taskText = taskInput.value
    
    if (taskText === "") {
        return;
    }

    toDo.innerHTML += `
        <li>
        <input type="checkbox" onchange="crossOut(this)">
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
        </li>
        `;
  
    taskInput.value = "";

}

function removeTask(button){
    button.parentElement.remove()
}

function crossOut(checkbox){
    let li=checkbox.parentElement;

    if (checkbox.checked) {
        li.classList.add("done");
    }
    else {
        li.classList.remove("done")
    }
}





