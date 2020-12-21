canvas = new fabric.Canvas('myCanvas');

//Player Location
player_x = 10;
player_y = 10;

// Block Size
block_width = 30;
block_height = 30;

// Objects
var player_object;
var block_object;

// Functions to udate the player and picture
function updatePlayerImage(){
    fabric.Image.fromURL('player.png', function(Image){
        player_object = Image;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function updateBlockImage(Block){
    fabric.Image.fromURL(Block, function(Image){
        block_object = Image;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyCode = e.keyCode;
    if(keyCode == 83){
        console.log("Stone(s)");
        updateBlockImage('stone.jpg');
    }
    else if(keyCode == 67){
        console.log("Cactus(c)");
        updateBlockImage('cactus.png');
    }
    else if(keyCode == 79){
        console.log("Glowstone(o)");
        updateBlockImage('glowstone.png');
    }
    else if(keyCode == 71){
        console.log("Grass(g)");
        updateBlockImage('grass.png');
    }
    else if(keyCode == 76){
        console.log("Lime carpet(l)");
        updateBlockImage('lime_carpet.png');
    }
    else if(keyCode == 78){
        console.log("Netherack(n)");
        updateBlockImage('netherack.jpg')
    }
    else if(keyCode == 87){
        console.log("Wood(w)");
        updateBlockImage('wood.jpg')
    }
    else if(keyCode == 66){
        console.log("Brick(b)");
        updateBlockImage('brick.jpg')
    }
    else if(keyCode == 89){
        console.log("Yelllow Brick(y)");
        updateBlockImage('yellow_brick.png')
    }

    // Increase and decrease block size
    if(e.shiftKey && keyCode == 187){
        block_width += 10;
        block_height += 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    else if(e.shiftKey && keyCode == 189){
        block_width -= 10;
        block_height -= 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
}