let box = document.querySelector(".box"); // box has accessed
/** let top = 100;
let right = 100; **/

box.style.zIndex = 1;
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

let btn = document.querySelector("button");
btn.style.position = "absolute";
btn.style.right = "750px";
btn.style.marginTop = "20px";
btn.style.fontSize = "1.3em";
btn.style.padding = "5px";

btn.addEventListener("click", function() {
    x = 0;
    y = 0;
    box.style.transform = "translate(0px, 0px)";
    box.focus();
})


