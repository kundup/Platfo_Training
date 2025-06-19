export function KeyboardControl(controls = {}){
    window.addEventListener("keydown", event => {                        
        if (["ArrowUp", "ArrowDown", " "].includes(event.key)){
            event.preventDefault();
        }
        if (event.key === "ArrowDown"){
            controls.onDown?.();
        }
        if (event.key === "ArrowUp"){
            controls.onUp?.();
        }
        if(event.key === " "){            
            controls.onShoot?.();
        }

        if(event.key === "f"){
            controls.rocket?.();
        }        
    })
}
        
