canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1Height = 100;
var car1Width = 100;

var car2Height = 100;
var car2Width = 100;

function onLoad() {
    background_image = new Image();
    background_image.onload = uploadBackground;
    background_image.src = "racingBG.jpg";
    car1Image = new Image();
    car1Image.onload = uploadCar1;
    car1Image.src = "Car1.png";
    car2Image = new Image();
    car2Image.onload = uploadCar2;
    car2Image.src = "Car2.png";
}

function uploadBackground() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1Image, 0, 0, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2Image, 0, 150, car2Width, car2Height);
}

window.addEventListener("keydown", getKey);

function getKey(e){
    if(e.keyCode == 37){
        console.log("Left");
    }
    else if(e.keyCode == 39){
        console.log("Right");
    }
    else if(e.keyCode == 38){
        console.log("Up");
    }
    else if(e.keyCode == 40){
        console.log("Down");
    }
}