import { Player } from "./player.js";
import { Enemies } from "./enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./globals.js";
import { KeyboardControl } from "./input.js";

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

const WIDTH = canvasel.width = CANVAS_WIDTH;
const HEIGHT = canvasel.height = CANVAS_HEIGHT;

const player = new Player(WIDTH);
const enemies = new Enemies ();
const backGroundImage = document.getElementById("background");
const bgSpeed = 1;

KeyboardControl({
    onUp : () => player.move(-10),
    onDown : () => player.move(10),
    onShoot : () => player.shoot(),
});

let backgroundX = 0

function animate (){
    
    context.clearRect(0, 0, WIDTH, HEIGHT);

    backgroundX -= bgSpeed; 
    if (backgroundX <= -WIDTH) {
        backgroundX = 0; 
    }

    context.drawImage(backGroundImage, backgroundX, 0, WIDTH, HEIGHT);
    context.drawImage(backGroundImage, backgroundX + WIDTH, 0, WIDTH, HEIGHT);

    enemies.drawRect(context);
    enemies.updateRect();
    player.draw(context);
    player.update() 
    requestAnimationFrame(animate)
}

// check the images are loaded
if (backGroundImage.complete){
    animate();
} else {
    backGroundImage.onload = () => {
        animate();
    }
}




