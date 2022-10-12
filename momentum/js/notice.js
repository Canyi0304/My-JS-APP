const toDoForm = document.getElementById("todo-form");
//const toDoInput  = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//const toDos = [];   //매번 value에 들어가는 배열값이 초기화됨
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    
    //localStorage.setItem("todos", toDos);                     //array to string in value
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));     //array처럼 생긴 string값으로 저장

}

function deleteTodo(event) {
    
    //console.log(event.target);
    //console.log(event);
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    //console.log(li.id);
    console.log(typeof li.id);            //li.id = string type
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));   //todi.id (int) , li.id(string) 
    saveToDos();
 
}


function paintToDo(newTodo) {
    
    //console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    //span.innerText = newTodo;
    span.innerText = newTodo.text;
    const button = document.createElement("button");


    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    //span.innerText = newTodo;
    //console.log(li);
    toDoList.appendChild(li);                //생성된 lispan을 출력
}

function handToDoSubmit(event) {
    
    event.preventDefault();
    //console.log(toDoInput.value);

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
        //id : toString(guid()) ,
    };
    toDos.push(newTodoObj);
    //toDos.push(newTodo);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handToDoSubmit);

// function sayHello(item) {
    
//     console.log("this is a turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos =  JSON.parse(savedToDos);     //stirng to object
    console.log(parsedToDos);
    console.log(typeof parsedToDos);
    toDos = parsedToDos;                   //let toDos = [];참고         
    //parsedToDos.forEach(sayHello);
    //parsedToDos.forEach((item) => console.log("this is a turn of", item));  //arrow cfunction
    parsedToDos.forEach(paintToDo);  // ex) paint("1"), paint("2")
}


