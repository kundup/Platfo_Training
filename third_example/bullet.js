export class Bullet {
    constructor(){
        this.x = 600;
        this.y = 150;
        this.speed = 3;
        this.width = this.height = 18;
        this.image = document.getElementById("bullet");
        this.fire = false;
    }
    draw(ctx){

        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(this.x - this.radius, this.y + 2 * this.radius, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }     
    update (){
        if (this.fire){
            this.x -= this.speed;
        }        
    }
}