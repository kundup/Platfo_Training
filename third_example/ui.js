export class Graphics {
    constructor(){
        this.hud = {
            x : 0,
            y: 0,
            w : 800,
            h : 28,
            image : document.getElementById("hud")
        }
    }
    drawHud (ctx, hudColor){
        ctx.save();        
        ctx.globalAlpha = 0.25;
        ctx.drawImage(this.hud.image, this.hud.x, this.hud.y, this.hud.w, this.hud.h);
        ctx.restore();
    }

}