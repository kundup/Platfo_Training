import { CANVAS_HEIGHT, CANVAS_WIDTH, COLOR} from "./globals.js"

export class Snow {
    constructor (){ 
        this.snowFlakes = [];        
        this.radius = 20;
        this.speed = 1
        this.spawnSnow();
    
    }

    draw (ctx) {  
        this.snowFlakes.forEach((flakes)=> {
            ctx.beginPath();
            ctx.fillStyle = flakes.flakecolor;
            ctx.arc(flakes.x, flakes.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        })     
    }

    spawnSnow (n = 100){
        for (let i = 0; i < n; i ++){

            const snowflake = {
                x : Math.random() * CANVAS_WIDTH,
                y : Math.random() * CANVAS_HEIGHT,
                flakecolor : COLOR.snow,
            }

            this.snowFlakes.push(snowflake);
        }
        
    }
    updateSnow(){

        const targetSnowNumber = this.snowFlakes.length;
        this.snowFlakes.forEach((flakes)=>{
            flakes.y += this.speed;
        })

        this.rainFlakes.filter(flakes => flakes.y < CANVAS_HEIGHT);
        this.spawnSnow(targetSnowNumber - this.snowFlakes.length);
    }

}

export class Rain {
    constructor (){     
        this.rainFlakes = [];        
        this.radius = 10;
        this.speed = 2
        this.spawnRain();    
    }

    draw (ctx) {  
        this.rainFlakes.forEach((flakes)=> {
            ctx.beginPath();
            ctx.fillStyle = flakes.flakecolor;
            ctx.arc(flakes.x, flakes.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        })     
    }

    spawnRain (n = 100){
        for (let i = 0; i < n; i ++){

            const rainflake = {
                x : Math.random() * CANVAS_WIDTH,
                y : Math.random() * CANVAS_HEIGHT,
                flakecolor : COLOR.rain,
            }

            this.rainFlakes.push(rainflake);
        }
        
    }
    updateRain(){
        const targetRainNumber = this.rainFlakes.length;
        this.rainFlakes.forEach((flakes)=>{
            flakes.y += this.speed;
        })

        this.rainFlakes.filter(flakes => flakes.y < CANVAS_HEIGHT);
        this.spawnRain(targetRainNumber - this.rainFlakes.length);
    }
}
