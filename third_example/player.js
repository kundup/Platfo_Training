import { Bullet } from "./bullet.js";

export class Player {
    constructor(){
        this.height = this.width = 100;    
        this.x = 650;
        this.y = 100;
        this.velY = 15;   
        this.bulletList = []; 
        this.image = document.getElementById("player"); 
        this.sourceWidth = this.sourceHeight = 250;
        this.sourceX = 0;
        this.sourceY = 0; 
        this.frameCounter = 0;
        this.fps = 4;     
        this.totalFrame = 2;
    }
    draw (ctx){
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        // this.bulletList.forEach((bullets)=>{
        //     bullets.drawBullet(ctx)
        // }) 
        
        ctx.drawImage(this.image, this.sourceX * this.sourceWidth, this.sourceY * this.sourceHeight, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
    }
    update(){         

        if(this.frameCounter === this.fps){            
            this.sourceX = (this.sourceX + 1) % this.totalFrame;
            this.frameCounter = 0;
        }
        this.frameCounter ++;
    } 
    
    shoot (){
        this.bulletList.push(new Bullet(this.x, this.y));
        console.log(this.bulletList);
    }

    move (amount){
        this.y += amount
    }
       
}