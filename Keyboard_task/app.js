let box = document.querySelector(".box"); // box has accessed
/** let top = 100;
let right = 100; **/

        
box.setAttribute("tabindex", "0");

let x = 0;
let y = 0;

box.addEventListener("keydown", function(event){
    console.log(event);
    event.preventDefault();

    // Now I will run if else 
        /** if ( event.code == "ArrowUp"){
            box.style.position = "absolute";
            box.style.top = "100px";
        } else if ( event.code == "ArrowDown"){
            box.style.position = "absolute";
            box.style.down = "100px";
        } else if (event.code == "ArrowLeft"){
            box.style.position = "absolute";
            box.style.left = "100px";
        } else if (event.code == "ArrowRight"){
            box.style.position = "absolute";
            box.style.right = "100px";
        } 
            **/
        
        
        // --------------------------------------------
        /** if ( event.code == "ArrowUp"){
            top = top-20;
        } else if( event.code == "ArrowDown"){
            top = top + 20;
        } else if (event.code == "ArrowRight"){
            right = right -20;
        } else if (event.code == "Arrowleft"){
            right = right + 20;
        }

        box.style.top = top + "px";
        box.style.right = right + "px"; **/

        // ---------------------------------------------------

        if ( event.code == "ArrowUp"){
            y = y-20;
        } else if(event.code == "ArrowDown"){
            y = y+20;
        } else if(event.code == "ArrowRight"){
            x = x + 20;
        } else if( event.code == "ArrowLeft"){
            x = x - 20;
        };

        box.style.transform = `translate(${x}px, ${y}px)`;


        
});


