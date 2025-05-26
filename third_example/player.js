import { Bullet } from "./bullet.js";

export class Player {
    constructor(width){
        this.width = width
        this.x = this.width - 50;
        this.y = 100;
        this.velY = 15;
        this.size = 25;
        this.bullet = new Bullet(this.x, this.y);
        this.addKeyboardControl();
        this.fire = false;
        this.direction = null;
    }

    draw (ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        this.bullet.drawBullet(ctx);       
    }

    update(){ 
        
        if (this.fire){
            this.bullet.x -= 2;
            if (this.x < 0){
                this.fire = false;
                this.bullet.x = this.x;
            }
        }

        if (this.direction){
            this.y -= this.velY;
        } else {
            this.y += this.velY;            
        }        
        this.bullet.y = this.y;
    }
    

    addKeyboardControl (){
        window.addEventListener("keydown", event => {
            event.preventDefault()
            if (event.key=== "ArrowUp"){
                this.direction = true;
                this.update();
            }

            if(event.key === "ArrowDown"){
                this.direction = false;
                this.update();
            }

            if(event.key === "f"){
                this.fire = true; 
            }
        })
    }
}
 


