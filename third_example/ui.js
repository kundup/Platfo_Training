export class Graphics {
    constructor(){
        this.hud = {
            x : 0,
            y: 0,
            w : 800,
            h : 28,
        }
    }
    drawHud (ctx, hudColor){
        ctx.fillStyle = hudColor;
        ctx.fillRect(this.hud.x, this.hud.y, this.hud.w, this.hud.h);
    }
}