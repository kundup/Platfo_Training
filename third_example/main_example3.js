import { Player } from "./player.js";
import { Enemies } from "./enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./globals.js";
import { KeyboardControl } from "./input.js";
import { Snow, Rain, Sunny } from "./weather.js";

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

const WIDTH = canvasel.width = CANVAS_WIDTH;
const HEIGHT = canvasel.height = CANVAS_HEIGHT;

const weatherDiv = document.getElementById("weather");
const player = new Player(WIDTH);
const enemies = new Enemies ();
const weatherSystem = [new Sunny(), new Rain(), new Snow()];
let currentSystem = weatherSystem[Math.floor(Math.random() * weatherSystem.length)];
const backGroundImage = document.getElementById("background");
const bgSpeed = 1;
let backgroundX = 0;

KeyboardControl({
    onUp : () => player.move(-10),
    onDown : () => player.move(10),
    onShoot : () => player.shoot(),
});

function weatherText(){
    if (currentSystem instanceof Sunny){
        weatherDiv.innerText = "Weather : Sunny"
    }
    else if (currentSystem instanceof Rain){
        weatherDiv.innerText = "Weather : Rain"        
    }     
    else if (currentSystem instanceof Snow) {
        weatherDiv.innerText = "Weather : Snow"
    }
}
function weatherSystemDetermination(ctx){
    if (currentSystem instanceof Sunny){
        return;
    }
    else {
        currentSystem.draw(ctx);
        currentSystem.update();
    }    
}

function animate (){    
    context.clearRect(0, 0, WIDTH, HEIGHT);
    backgroundX -= bgSpeed; 
    if (backgroundX <= -WIDTH) {
        backgroundX = 0; 
    }
    context.drawImage(backGroundImage, backgroundX, 0, WIDTH, HEIGHT);
    context.drawImage(backGroundImage, backgroundX + WIDTH, 0, WIDTH, HEIGHT);
    weatherSystemDetermination(context);
    weatherText();
    enemies.drawRect(context);
    enemies.updateRect();
    player.draw(context);
    player.update();
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




