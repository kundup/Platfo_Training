import { Player } from "./player.js";
import { Enemies } from "./enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./globals.js";
import { KeyboardControl } from "./input.js";
import { Snow, Rain } from "./weather.js";

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

const WIDTH = canvasel.width = CANVAS_WIDTH;
const HEIGHT = canvasel.height = CANVAS_HEIGHT;

const weatherDiv = document.getElementById("weather");
const player = new Player(WIDTH);
const enemies = new Enemies ();
const rain = new Rain();
const snow = new Snow();
const sunny = "sunny";
const weatherSystem = [sunny, rain, snow];
const backGroundImage = document.getElementById("background");
const bgSpeed = 1;
let currentSystem = weatherSystem[Math.floor(Math.random() * 3)];
let backgroundX = 0;

KeyboardControl({
    onUp : () => player.move(-10),
    onDown : () => player.move(10),
    onShoot : () => player.shoot(),
});

function WeatherText(){
    if (currentSystem === sunny){
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
    if (currentSystem === sunny){
        return;
    }
    else if (currentSystem === rain){
        rain.draw(ctx);
        rain.updateRain();
    } else {
        snow.draw(ctx);
        snow.updateSnow();
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
    WeatherText();
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




