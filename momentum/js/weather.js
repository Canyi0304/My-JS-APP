const WEATHER_API_KEY = "6763630b9688c4e33e739d6b0620f6fc";


function onGeoOK(position) {
    
    const lat = position.coords.latitude;                //위도 
    const lon = position.coords.longitude;              //경도
    console.log("내가 있는 곳은 " , lat , lon);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;
    console.log(URL);
    fetch(URL).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data.name, data.weather[0].description);
        city.innerHTML = data.name;                                //innerHTML = innerText?   
        weather.innerHTML = `${data.weather[0].description} / ${Math.round(data.main.temp)}`;   
    });
}

function onGeoError() {
    
    alert("위치를 찾지 못했습니다.");
}



navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);