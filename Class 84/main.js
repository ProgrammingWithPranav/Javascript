canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var roverHeight = 100;
var roverWidth = 100;

function onLoad() {
  background_image = new Image();
  background_image.onload = uploadBackground;
  background_image.src = "mars.jpg";
  roverImage = new Image();
  roverImage.onload = uploadRover;
  roverImage.src = "rover.png";
}

function uploadBackground() {
  ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImage, 0, 0, roverWidth, roverHeight);
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
