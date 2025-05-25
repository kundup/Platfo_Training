import { Player } from "./player.js";

const x = "ali";
console.log(`hello${x}`);

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

const WIDTH = canvasel.width =  600;
const HEIGHT = canvasel.height = 600;

let rectList = []
const rectColor = ["brown", "green", "pink", "red", "orange"];

function spawnRect(n = 1){
    for (let i = 0; i < n; i++){
        let rect = {
            width: 20,
            height : 20,
            x: Math.random() * WIDTH / 8,
            y: Math.random() * (HEIGHT - 20),            
            color : rectColor[Math.floor(Math.random() * rectColor.length)],
            velocityX : Math.random() * 1.5        
        }
        rectList.push(rect)
    }
}
spawnRect(20);

function drawRect (){
    rectList.forEach(({x, y, ...rest})=>{
        context.fillStyle = rest.color;
        context.fillRect(x, y, rest.width, rest.height)
    })
}

function updateRect(){

    let target_number = rectList.length;
    rectList.forEach((rect)=>{
        rect.x+= rect.velocityX;        
    })

    rectList = rectList.filter(rect=> rect.x < WIDTH);
    spawnRect(target_number - rectList.length);    
}

const player = new Player(WIDTH);

function animate (){
    context.clearRect(0, 0, WIDTH, HEIGHT);
    drawRect();
    updateRect();
    player.draw(context);
    requestAnimationFrame(animate)
}

animate();

