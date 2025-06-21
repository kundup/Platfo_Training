import { CANVAS_HEIGHT, CANVAS_WIDTH, COLOR} from "./globals.js";

export class Snow {
    constructor (){ 
        this.snowFlakes = [];        
        this.radius = 2.5;
        this.speed = 1;        
        this.image = document.getElementById("snow");
        this.name = "Snow";
        this.fog = new Fog();
        this.severity = {
            0 : 100,
            1 : 150,
            2 : 300,
            3 : 600
        }
        const objLenght = Object.keys(this.severity).length
        this.snowCondition = this.severity[`${Math.floor(Math.random() * objLenght)}`];
        this.spawnSnow();
    }

    draw (ctx) {  
        this.snowFlakes.forEach((flakes)=> {
            ctx.drawImage(this.image, flakes.x, flakes.y);
        })
        // lazy initializing
        if (this.shouldDrawFog === undefined) {
            this.shouldDrawFog = Math.random() < 0.7; // just first time determine
        }
        if (this.shouldDrawFog) {
            this.fog.draw(ctx);
        }

        return this.shouldDrawFog         
    }

    spawnSnow(n = this.snowCondition){
              
        for (let i = 0; i < n; i ++){
            const snowflake = {
                x : Math.random() * CANVAS_WIDTH,
                y : Math.random() * -CANVAS_HEIGHT ,
                flakecolor : COLOR.snow,
                speed : Math.random() * this.speed + 1.5,
            }
            this.snowFlakes.push(snowflake);
        }
        
    }
    update(){

        this.snowFlakes.forEach((flakes)=>{
            flakes.y += flakes.speed;
        })

        this.snowFlakes = this.snowFlakes.filter(flakes => flakes.y < CANVAS_HEIGHT);
        const missingFlakes = this.snowCondition - this.snowFlakes.length;        

        if (missingFlakes >= 0 ){
            this.spawnSnow(missingFlakes);
        }
        
    }
}
export class Rain {
    constructor (){     
        this.rainFlakes = [];        
        this.radius = 2;
        this.speed = 8;
        this.spawnRain();
        this.image = document.getElementById("rain");
        this.name = "Rain";
        this.fog = new Fog();
        this.severity = {
            0 : 100,
            1 : 150,
            2 : 300,
            3 : 600
        } 
        const objLenght = Object.keys(this.severity).length
        this.rainCondition = this.severity[`${Math.floor(Math.random() * objLenght)}`];
        this.spawnRain();
    }

    draw (ctx) {  
        this.rainFlakes.forEach((flakes)=> {        
            ctx.drawImage(this.image, flakes.x, flakes.y);

        })        
        if (this.shouldDrawFog === undefined){
            this.shouldDrawFog = Math.random() < 0.7 ;
        }
        if (this.shouldDrawFog){
            this.fog.draw(ctx);
        }

        return this.shouldDrawFog
    }

    spawnRain (n = this.rainCondition){
        for (let i = 0; i < n; i ++){

            const rainflake = {
                x : Math.random() * CANVAS_WIDTH,
                y : Math.random() * -CANVAS_HEIGHT / 2,
                flakecolor : COLOR.rain,
                speed : Math.random() * this.speed + 4,
            }

            this.rainFlakes.push(rainflake);
        }        
    }
    update(){
        const targetRainNumber = this.rainFlakes.length;
        this.rainFlakes.forEach((flakes)=>{
            flakes.y += flakes.speed;
        })

        this.rainFlakes = this.rainFlakes.filter(flakes => flakes.y <= CANVAS_HEIGHT);
        this.spawnRain(targetRainNumber - this.rainFlakes.length);
    }
}
export class Sunny {
    constructor(){
        this.name = "Sunny";
    }
}
export class Fog {
    constructor(){
        this.name = "fog";
        this.image = document.getElementById("fog");
    }
    draw (ctx){
        ctx.drawImage(this.image, 0, 0, 1100, 750);                   
    }
}