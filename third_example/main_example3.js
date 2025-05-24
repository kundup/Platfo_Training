const x = "ali";
console.log(`hello${x}`);

const canvasel = document.getElementById("canvas");
const context = canvasel.getContext("2d");

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
spawnRect(100);
drawScore();
drawRect();

function drawScore() {
    const score = document.createElement("div");
    score.innerHTML = "Toplam rect sayısı: " + rectList.length;
    score.style.position = "absolute";
    score.style.top = "-50px";
    score.style.right = "-5px";
    score.style.fontSize = "20px";
    score.style.padding = "8px 12px";
    score.style.backgroundColor = "#f0f0f0";
    score.style.border = "1px solid #333";
    score.style.borderRadius = "5px";

    // Canvas kapsayıcısına ekle
    const container = document.getElementById("canvas-container");
    container.appendChild(score);
}


function drawRect (){
    rectList.forEach(({x, y, ...rest})=>{
        context.fillStyle = rest.color;
        context.fillRect(x, y, rest.width, rest.height)
    })
}
