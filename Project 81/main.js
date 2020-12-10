
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

width = "5";

circle(200, 200, "blue");

circle(250, 250, "yellow");

circle(300, 200, "black");

circle(350, 250, "green");

circle(400, 200, "red");

function circle(mouse_x, mouse_y, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}