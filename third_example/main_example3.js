import { Player } from "./player.js";
import { Enemies } from "./enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLOR } from "./globals.js";
import { KeyboardControl } from "./input.js";
import { Snow, Rain, Sunny, Fog } from "./weather.js";
import { Graphics } from "./ui.js";
import { Bullet } from "./weapon.js"

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

const WIDTH = canvasel.width = CANVAS_WIDTH;
const HEIGHT = canvasel.height = CANVAS_HEIGHT;

const weatherDiv = document.getElementById("weather");
const fogDiv = document.getElementById("Fog");
const bullet = new Bullet();
const graphics = new Graphics();
const player = new Player(WIDTH);
const enemies = new Enemies ();
const fog = new Fog();
const weatherSystem = [new Sunny(), new Rain(), new Snow()];
const currentSystem = weatherSystem[Math.floor(Math.random() * weatherSystem.length)];
const backGroundImage = document.getElementById("background");
const bgSpeed = 1;
let backgroundX = 0;

KeyboardControl({
    onUp : () => player.move(-10),
    onDown : () => player.move(10),
    onShoot : () => {
        player.shoot()
    },
    rocket : () => {
        player.bombshot()
    }

});

function weatherText(ctx){
    const fogExist = currentSystem.draw?.(ctx)?? false;
    weatherDiv.innerText = `Weather: ${currentSystem.name}`;
    fogDiv.innerText = `Fog : ${fogExist ? "Yes" : "No"}`;
}

function weatherSystemDetermination(ctx){    
    if (currentSystem instanceof Sunny){
        return;
    }
    else {        
        currentSystem.draw(ctx);
        currentSystem.update();
        ctx.fillStyle = "rgba(50, 50, 50, 0.35)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);                
    }    
}

weatherText(context);


function animate (){    
    context.clearRect(0, 0, WIDTH, HEIGHT);
    backgroundX -= bgSpeed; 
    if (backgroundX <= -WIDTH) {
        backgroundX = 0; 
    }
    context.drawImage(backGroundImage, backgroundX, 0, WIDTH, HEIGHT);
    context.drawImage(backGroundImage, backgroundX + WIDTH, 0, WIDTH, HEIGHT);
    graphics.drawHud(context, COLOR.hudColor); // hud drawing on top
    //weather system
    weatherSystemDetermination(context);
    //enemies animation
    enemies.drawRect(context);
    enemies.updateRect();    
    // player animation
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




