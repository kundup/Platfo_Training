const x = "ali";
console.log(`hello${x}`);

canvasel = document.getElementById("canvas");
context = canvasel.getContext("2d");

const WIDTH = canvasel.width =  800;
const HEIGHT = canvasel.height = 800;

let rectList = []

const rectColor = ["black", "green", "pink", "red", "yellow"];

function spawnRect(n){
    for (let i = 0; i < n; i++){
        let rect = {
            x: Math.random() * 100 + 200,
            y: Math.random() * 100 + 200,
            width: Math.random() * 100,
            height : Math.random() * 100,
            color : rectColor[Math.floor(Math.random() * rectColor.length)]        
        }
        rectList.push(rect)
    }
}
spawnRect(4);
drawRect();

function drawRect (){
    rectList.forEach(({x, y, ...rest})=>{
        context.fillStyle = rest.color;
        context.fillRect(x, y, rest.width, rest.height)
    })
}
