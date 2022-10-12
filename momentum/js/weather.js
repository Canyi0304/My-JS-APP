function onGeoOK(position) {
    
    const latitude = position.coords.latitude;                //위도 경도
    const longitude = position.coords.longitude;
    console.log("내가 있는 곳은 " , latitude , longitude);
    
}

function onGeoError(params) {
    
    alert("위치를 찾지 못했습니다.");
}



navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);