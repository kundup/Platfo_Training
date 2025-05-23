const x = "ali";
console.log(`hello${x}`);

canvasel = document.getElementById("canvas");
context = canvasel.getContext("2d");

const WIDTH = canvasel.width =  800;
const HEIGHT = canvasel.height = 800;

let rectList = []

const rectColor = {
    color1 : "green",
    color2 : "pink",
    color3 : "red",
    color4 : "black"
}

function spawnRect(n){
    for (let i = 0; i < n; i++){
        let rect = {
            x: Math.random() * 100 + 200,
            y: Math.random() * 100 + 200,
            width: Math.random() * 100,
            height : Math.random() * 100,
            color : rectColor[`color${Math.floor(Math.random() * 4 + 1)}`]        
        }
        rectList.push(rect)
    }
}
spawnRect(4);
drawRect();

function drawRect (){
    rectList.forEach((rects)=>{
        context.fillStyle = rects.color;
        context.fillRect(rects.x, rects.y, rects.width,rects.height)
    })
}
