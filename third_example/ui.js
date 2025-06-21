export class Graphics {
    constructor(){
        this.hud = {
            x : 0,
            y: 0,
            w : 800,
            h : 28,
            image : document.getElementById("hud")
        } 
        this.bulletnumber = 100;
        this.maximumBullet = 100;       
    }
    drawHud (ctx){
        ctx.save();        
        ctx.globalAlpha = 0.25;
        ctx.drawImage(this.hud.image, this.hud.x, this.hud.y, this.hud.w, this.hud.h);
        ctx.restore();
    }

    drawHealthBar(ctx, x, y, width, height, health, maxHealth, label){

        ctx.fillStyle = "rgba(255,255,255,0.6)"
        const textOffset = {
            x : 120,
            y : 12 
        }
        ctx.font = "12px 'Press Start 2P'"
        ctx.fillText(label, x- textOffset.x, y + textOffset.y);

        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = "rgba(255,255,255,0.4)";
        const ratio = health / maxHealth;
        ctx.fillRect(x, y, ratio * width, height);
        
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, width, height)

    }

    drawAmmo(ctx, x, y, width, height, label ){

        ctx.fillStyle = "rgba(255,255,255,0.6)"
        const textOffset = {
            x : 120,
            y : 12 
        }
        ctx.font = "12px 'Press Start 2P'"
        ctx.fillText(label, x- textOffset.x, y + textOffset.y);

        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = "rgba(255,255,255,0.4)";
        const ratio = this.bulletnumber / this.maximumBullet;
        ctx.fillRect(x, y, ratio * width, height);
        
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, width, height);
    }
    updateAmmo(){
        if (this.bulletnumber <= 2){
            this.bulletnumber = 0
        }
        this.bulletnumber -= 2;
    }
}