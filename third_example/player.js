export class Player {
    constructor(width){
        this.width = width
        this.x = this.width - 50;
        this.y = 0;
        this.size = 25;
        this.addKeyboardControl();
    }

    draw (ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.size, this.size)        
    }

    addKeyboardControl (){
        window.addEventListener("keydown", event => {
            event.preventDefault()
            if (event.key=== "ArrowUp"){
                this.y += 15;
            }

            if(event.key === "ArrowDown"){
                this.y -= 15;
            }
        })
    }
}
 


