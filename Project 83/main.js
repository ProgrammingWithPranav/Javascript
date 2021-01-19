canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "red";
lineWidth = 1;
radius = 1;

var last_touch_pos_x;
var last_touch_pos_y;

canvas.addEventListener("touchstart", m_touchStart);
canvas.addEventListener("touchmove", m_touchMove);

canvas.addEventListener("mouseup", myMouseUp);
canvas.addEventListener("mousedown", myMouseDown);
canvas.addEventListener("mousemove", myMouseMove);
canvas.addEventListener("mouseleave", myMouseLeave);

screenWidth = screen.width - 70;
screenHeight = screen.height - 300;

last_mouse_action = "";

function myMouseUp(e){
    last_mouse_action = "mouseUp";
}

function myMouseDown(e){
    last_mouse_action = "mouseDown";
}

function myMouseMove(e){
    colour = document.getElementById("colour_input").value;
    width = document.getElementById("width_input").value;

    current_mouse_pos_x = e.clientX - canvas.offsetLeft;
    current_mouse_pos_y = e.clientY - canvas.offsetTop;

    if(last_mouse_action == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.moveTo(last_mouse_pos_x, last_mouse_pos_y);

        ctx.lineTo(current_mouse_pos_x, current_mouse_pos_y);

        ctx.stroke();
    }

    last_mouse_pos_x = current_mouse_pos_x;
    last_mouse_pos_y = current_mouse_pos_y;
}

function myMouseLeave(e){
    last_mouse_action = "mouseLeave";
}

if(screen.width < 992){
    document.getElementById("myCanvas").width = screenWidth;
    document.getElementById("myCanvas").height = screenHeight;

    document.body.style.overflow="hidden";
    console.log("Anything");
}

function m_touchStart(e){
    last_touch_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    last_touch_pos_y = e.touches[0].clientY - canvas.offsetTop;

    colour = document.getElementById("colour_input").value;
    lineWidth = document.getElementById("width_input").value;
    radius = document.getElementById("width_input").value;
}

function m_touchMove(e){
    var current_touch_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_touch_pos_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = colour;
    ctx.moveTo(last_touch_pos_x, last_touch_pos_y);
    ctx.lineTo(current_touch_pos_x, current_touch_pos_y);
    ctx.stroke();

    last_touch_pos_x = current_touch_pos_x;
    last_touch_pos_y = current_touch_pos_y;
}

function emptyCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}