canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1Height = 100;
var car1Width = 100;

var car2Height = 100;
var car2Width = 100;

var car1X = 0;
var car1Y = 0;

var car2X = 0;
var car2Y = 150;

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
    ctx.drawImage(car1Image, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2Image, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", getKey);

function getKey(e){
    if(car1X > 900){
        console.log("Car 1 wins!!!!");
        document.getElementById("game_status").innerHTML = 'Car 1 wins!!!';
    }

    if(car2X > 900){
        console.log("Car 2 wins!!!!");
        document.getElementById("game_status").innerHTML = 'Car 2 wins!!!';
    }

    if(e.keyCode == 37){
        car1Left();
        console.log("Left");
    }
    else if(e.keyCode == 39){
        car1Right();
        console.log("Right");
    }
    else if(e.keyCode == 38){
        car1Up();
        console.log("Up");
    }
    else if(e.keyCode == 40){
        car1Down();
        console.log("Down");
    }

    // Car 2 functions

    if(e.keyCode == 87){
        car2Up();
    }
    else if(e.keyCode == 65){
        car2Left();
    }
    else if(e.keyCode == 83){
        car2Down();
    }
    else if(e.keyCode == 68){
        car2Right();
    }
}

function car1Up(){
    if(car1Y >= 0){
        car1Y -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1Down(){
    if(car1Y <= 600 - car1Height){
        car1Y += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1Left(){
    if(car1X >= 0){
        car1X -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1Right(){
    if(car1X <= 1000 - car1Width){
        car1X += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

// Car 2 functions

function car2Up(){
    if(car2Y >= 0){
        car2Y -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2Down(){
    if(car2Y <= 600 - car2Height){
        car2Y += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2Left(){
    if(car2X >= 0){
        car2X -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2Right(){
    if(car2X <= 1000 - car2Width){
        car2X += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}