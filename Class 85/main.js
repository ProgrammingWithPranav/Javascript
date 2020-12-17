canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var roverHeight = 100;
var roverWidth = 100;
var rover_x = 10;
var rover_y = 10;

var background_images = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
background_image_number = Math.floor(Math.random() * background_images.length);

function onLoad() {
  background_image = new Image();
  background_image.onload = uploadBackground;
  background_image.src = background_images[background_image_number];
  roverImage = new Image();
  roverImage.onload = uploadRover;
  roverImage.src = "rover.png";
}

function uploadBackground() {
  ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImage, rover_x, rover_y, roverWidth, roverHeight);
}

window.addEventListener("keydown", getKey);

function getKey(e){
    if(e.keyCode == 37){
        if(rover_x > 0){
            left();
        }
    }
    else if(e.keyCode == 39){
        if(rover_x < (canvas.width - roverWidth)){
            right();
        }
    }
    else if(e.keyCode == 38){
        if(rover_y > 0){
            up();
        }
    }
    else if(e.keyCode == 40){
        if(rover_y < (canvas.height - roverHeight)){
            down();
        }
    }
}

function up(){
    rover_y -= 10;
    uploadBackground();
    uploadRover();
    console.log("Rover Position is: " + rover_x, rover_y);
}
function down(){
    rover_y += 10;
    uploadBackground();
    uploadRover();
    console.log("Rover Position is: " + rover_x, rover_y);
}
function left(){
    rover_x -= 10;
    uploadBackground();
    uploadRover();
    console.log("Rover Position is: " + rover_x, rover_y);
}
function right(){
    rover_x += 10;
    uploadBackground();
    uploadRover();
    console.log("Rover Position is: " + rover_x, rover_y);
}
