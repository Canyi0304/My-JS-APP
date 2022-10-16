const clock = document.querySelector("h2#clock");

function getClock() {

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,0);   //string이 두 글자가 아니면 앞쪽에 0추가 , padEnd: 뒤를 변경 할떄 
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

//setInterval(sayHello, 5000);

getClock();
setInterval(getClock, 1000);  //1000ms = 1s