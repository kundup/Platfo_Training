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
        this.frameInterval = 4;     
        this.totalFrame = 2;
        this.offset = {
            left : {x : 8, y : 54 },          
            right : {x: 10, y : 61}
        }    
    }
    draw (ctx){
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        // this.bulletList.forEach((bullets)=>{
        //     bullets.drawBullet(ctx)
        // })        
        ctx.drawImage(this.image, this.sourceX * this.sourceWidth, this.sourceY * this.sourceHeight, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
        this.bulletList.forEach(bullet => bullet.draw(ctx))
    }
    update(){   
        if(this.frameCounter === this.frameInterval){            
            this.sourceX = (this.sourceX + 1) % this.totalFrame;
            this.frameCounter = 0;
        }
        this.frameCounter ++;

        this.bulletList.forEach(bullet => bullet.update());
        this.bulletList = this.bulletList.filter(bullet => bullet.x >= 0);
        console.log(this.bulletList);
    }     
    shoot (){
        const baseLeftx = this.x + this.offset.left.x;
        const baseLefty = this.y + this.offset.left.y;
        const baseRightx = this.x + this.offset.right.x;
        const baseRighty = this.y + this.offset.right.y
        this.bulletList.push(new Bullet(baseLeftx, baseLefty), new Bullet(baseRightx, baseRighty));
    }
    move (amount){
        this.y += amount
    }
       
}