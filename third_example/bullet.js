export class Bullet {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.color = "red";
        this.radius = 5;
    }

    drawBullet(ctx){

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x - this.radius, this.y + 2 * this.radius, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    updateBullet(x, y){
        this.x = x;
        this.y = y;
    }
}