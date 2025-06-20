export class Bullet {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speed = 3.5;
        this.width = this.height = 18;
        this.image = document.getElementById("bullet");
        this.fire = false;
        this.damage = 5;
        this.quantity = 200;
    }
    draw(ctx){

        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(this.x - this.radius, this.y + 2 * this.radius, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }     
    update (){
        this.x -= this.speed;
    }   
}

export class Bomb {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = 6.5;
        this.width = this.height = 45;
        this.image = document.getElementById("bomb");
        this.damage = 15;
        this.quantity = 30;
    }

    draw (ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update (){
        this.x -= this.speed;
    }
}

export class Ballistics {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = {
            x : 8,
            y : 2
        }
        this.width = this.height = 45;
        this.image = document.getElementById("bomb");
        this.damage = 25;
        this.quantity = 5;
    }

    draw (ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update (){
        this.x -= this.speed.x;
    }    
}