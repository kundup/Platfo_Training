import { Bullet } from "./bullet.js";

export class Player {
    constructor(width){
        this.width = width
        this.x = this.width - 150;
        this.y = 100;
        this.velY = 15;
        this.size = 25;    
        this.bulletList = []; 
        this.image = document.getElementById("player");       
    }
    draw (ctx){
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        // this.bulletList.forEach((bullets)=>{
        //     bullets.drawBullet(ctx)
        // }) 
        
        ctx.drawImage(this.image, this.x, this.y, 100, 100);
    }
    update(){ 
        this.bulletList.forEach((bullet, index)=>{
            bullet.x -= bullet.speed;
            if (bullet.x < 0) {
                this.bulletList.splice(index, 1)
            } 
        });        
    } 
    
    shoot (){
        this.bulletList.push(new Bullet(this.x, this.y));
        console.log(this.bulletList);
    }

    move (amount){
        this.y += amount
    }
       
}