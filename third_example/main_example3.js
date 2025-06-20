import { Player } from "./player.js";
import { Enemies } from "./enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH, COLOR } from "./globals.js";
import { KeyboardControl } from "./input.js";
import { Snow, Rain, Sunny, Fog } from "./weather.js";
import { Graphics } from "./ui.js";
import { Bullet } from "./weapon.js";

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");
const WIDTH = canvasel.width = CANVAS_WIDTH;
const HEIGHT = canvasel.height = CANVAS_HEIGHT;

// div elements
const weatherDiv = document.getElementById("weather");
const fogDiv = document.getElementById("Fog");

// classses introduced
const bullet = new Bullet();
const graphics = new Graphics();
const player = new Player();
const enemies = new Enemies ();
const fog = new Fog();
const weatherSystem = [new Sunny(), new Rain(), new Snow()];
const currentSystem = weatherSystem[Math.floor(Math.random() * weatherSystem.length)];

// backgorunds
const backGroundImage = document.getElementById("background");
const bgSpeed = 1;
let backgroundX = 0;

KeyboardControl({
    onUp : () => player.move(-10),
    onDown : () => player.move(10),
    onShoot : () => {
        player.shoot();
        graphics.updateAmmo();
    },
    rocket : () => {
        player.bombshot();
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
function UIgraphics(){
    weatherText(context);
    graphics.drawHealthBar(context, 150, 600, 150, 10, 75, 100, "[ Health:              ]");
    graphics.drawHud(context, COLOR.hudColor); // hud drawing on top
    graphics.drawAmmo(context, 150, 620, 150, 10, "[ Ammo:                ]");
}

function visibilityRateCalculation (){
    // calculate visibility    
}

function animate (){    
    context.clearRect(0, 0, WIDTH, HEIGHT);
    backgroundX -= bgSpeed; 
    if (backgroundX <= -WIDTH) {
        backgroundX = 0; 
    }
    context.drawImage(backGroundImage, backgroundX, 0, WIDTH, HEIGHT);
    context.drawImage(backGroundImage, backgroundX + WIDTH, 0, WIDTH, HEIGHT);
    UIgraphics(); 

    //weather system
    weatherSystemDetermination(context);

    //enemies animation
    enemies.drawRect(context);
    enemies.updateRect();  

    // player animation
    player.draw(context);
    player.update();
    requestAnimationFrame(animate);
}

// check the images are loaded
if (backGroundImage.complete){
    animate();
} else {
    backGroundImage.onload = () => {
        animate();        
    }
}




