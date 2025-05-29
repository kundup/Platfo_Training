import { Bullet } from "./bullet.js";

export class Player {
    constructor(width){
        this.width = width
        this.x = this.width - 50;
        this.y = 100;
        this.velY = 15;
        this.size = 25;    
        this.bulletList = [];
        this.addKeyboardControl();
        
    }
    draw (ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        this.bulletList.forEach((bullets)=>{
            bullets.drawBullet(ctx)
        })       
    }
    update(){ 
        this.bulletList.forEach((bullet, index)=>{
            bullet.x -= bullet.speed;
            if (bullet.x < 0) {
                this.bulletList.splice(index, 1)
            } 
        });        
    }

    collision (others){
        for (let i = this.bulletList.length -1 ; i >= 0; i--){
            for (let j = others.lenght -1; j >= 0; j--) {


            }
        }
    }
    
    addKeyboardControl (){
        window.addEventListener("keydown", event => {                        
            if (["ArrowUp", "ArrowDown", " "].includes(event.key)){
                event.preventDefault()
            }
            if (["ArrowUp", "ArrowDown"].includes(event.key)){
                const dy = event.key === "ArrowDown"?this.velY: -this.velY;
                this.y += dy;
            }
            if(event.key === " "){                
                this.bulletList.push(new Bullet(this.x, this.y));
                console.log(this.bulletList);
            }
        })
    }   
}