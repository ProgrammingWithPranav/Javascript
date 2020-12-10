
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

colour = "orange";
width = "10";

circle(200, 200);

canvas.addEventListener("mousedown", drawCircle);

function drawCircle(e){
    colour = document.getElementById("colourInput").value;

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}