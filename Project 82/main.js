canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "red";
width = 1;
radius = 20;


canvas.addEventListener("mouseup", myMouseUp);
canvas.addEventListener("mousedown", myMouseDown);
canvas.addEventListener("mousemove", myMouseMove);
canvas.addEventListener("mouseleave", myMouseLeave);

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
    radius = document.getElementById("radius_input").value;

    current_mouse_pos_x = e.clientX - canvas.offsetLeft;
    current_mouse_pos_y = e.clientY - canvas.offsetTop;

    if(last_mouse_action == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.arc(current_mouse_pos_x, current_mouse_pos_y, radius, 0, 2 * Math.PI);

        ctx.stroke();
    }
}

function myMouseLeave(e){
    last_mouse_action = "mouseLeave";
}

function emptyCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}