const toDoForm = document.getElementById("todo-form");
//const toDoInput  = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function paintToDo(newTodo) {
    
    console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    //span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);                //생성된 lispan을 출력
}

function handToDoSubmit(event) {
    
    event.preventDefault();
    //console.log(toDoInput.value);

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}


toDoForm.addEventListener("submit", handToDoSubmit);