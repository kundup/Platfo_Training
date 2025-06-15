import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./globals.js";

export class Enemies{

    constructor(){
        this.enemyNumber = Math.floor(Math.random() * 10);
        this.rectList = []
        this.rectColor = ["brown", "green", "blue", "red", "orange"];
        this.speedMap = {
            green : 2,
            brown : 1,
            blue : 1.5
        }
        this.spawnRect(this.enemyNumber);
    }       
    spawnRect(n = 1){
        for (let i = 0; i < n; i++){
            const color = this.rectColor[Math.floor(Math.random() * this.rectColor.length)];
            let rect = {
                width: 20,
                height : 20,
                x: Math.random() * CANVAS_WIDTH / 8,
                y: Math.random() * (CANVAS_HEIGHT - 20),            
                color : color,
                velocityX : this.speedMap[color] ?? 1.25,       
            }
            this.rectList.push(rect)
        }
    }    
    drawRect (context){
        this.rectList.forEach(({x, y, ...rest})=>{
            context.fillStyle = rest.color;
            context.fillRect(x, y, rest.width, rest.height)
        })
    }
    
    updateRect(){
    
        let target_number = this.rectList.length;
        this.rectList.forEach((rect)=>{
            rect.x += rect.velocityX;        
        })
    
        this.rectList = this.rectList.filter(rect=> rect.x < CANVAS_WIDTH);
        this.spawnRect(target_number - this.rectList.length);    
    }       
}

