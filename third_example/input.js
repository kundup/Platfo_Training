export function KeyboardControl(player){

    window.addEventListener("keydown", event => {                        
        if (["ArrowUp", "ArrowDown", " "].includes(event.key)){
            event.preventDefault();

        }
        if (["ArrowUp", "ArrowDown"].includes(event.key)){
            const dy = event.key === "ArrowDown"?player.velY: -player.velY;
            player.y += dy;
        }
        if(event.key === " "){            
            player.shoot();           
        }
    })

}
        
