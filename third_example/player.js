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
    }
    draw (ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        this.bullet.drawBullet(ctx);       
    }
    update(){ 
        
        if (this.fire){
            this.bullet.x -= 2;
            if (this.bullet.x < 0){
                this.fire = false;
                this.bullet.x = this.x;
                this.bullet.y = this.y;
            }
        }      
    }
    addKeyboardControl (){
        window.addEventListener("keydown", event => {
            if (["ArrowUp", "ArrowDown", " "].includes(event.key)){
                event.preventDefault()
            }
            
            if (event.key=== "ArrowUp"){
                this.y -= this.velY
                if (!this.fire) this.bullet.y = this.y
            }
            if(event.key === "ArrowDown"){
                this.y += this.velY;
                if (!this.fire) this.bullet.y = this.y
            }
            if(event.key === " " && !this.fire){
                this.fire = true;
                this.bullet.y = this.y; 
                this.bullet.x = this.x;

            }
        })
    }
}
 


