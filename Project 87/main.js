var canvas = new fabric.Canvas("myCanvas");

block_width = 100;
block_height = 100;

player_x = 10;
player_y = 10;
 
var player_object;
var block_object;

function player_update(){
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

function new_image(Block){
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
    if(keyCode == 70){
        new_image('spiderman_face.png');
        console.log("f");
    }

    else if(keyCode == 66){
        new_image('hulk_body.png');
        console.log("b");
    }
    else if(keyCode == 76){
        new_image('ironman_legs.png');
        console.log("l");
    }
    else if(keyCode == 82){
        new_image('thor_right_hand.png');
        console.log("b");
    }
    else if(keyCode == 82){
        new_image('captain_america_left_hand.png');
        console.log("b");
    }
}
