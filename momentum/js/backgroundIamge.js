const images = [
    "0.jpeg",
    "1.jpg",
    "2.jpeg",
    "3.jpg",
    "4.jpg",
];

const choseImage = images[Math.floor(Math.random()*images.length)];
console.log(choseImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);   //body 맨 위에
//document.body.prepend(bgImage);         //body 맨 아래