//const loginForm = document.getElementById("#login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link  = document.querySelector("a");
const greeting  = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    
    event.preventDefault();  //기본적으로 발생하는 이벤트를 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY,username);
    console.log(username);
    paintGreetings(username);
}


function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    //alert("clicked!");
}


function paintGreetings(username) {
    
    //greeting.innerText = "Hello " + userName; 
    greeting.innerText = `좋은하루야! ${username}🥳`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savdUsername = localStorage.getItem(USERNAME_KEY);



if (savdUsername === null) {
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else
{
    paintGreetings(savdUsername);
    
}



