let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("Button has been clicked !!");
});

btn.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("Button has been Clicked !!");
});

// Now accessing the input button:- 
let input = document.querySelector("input");
input.style.margin = " 10px";

input.addEventListener("keydown", function(event) {  // This is accessed if anyKey has pressed !! 
    console.log(event);
    console.log(" You have pressed a Key !!");
})

// Now this is for keyup event:- 

input.addEventListener("keyup", function(event) { // This is triggered when a key is pressed and released 
    console.log(event);
    console.log(" Now you have released a key");
});

// Now accessing the second input:- 

let inputTwo = document.querySelector(".second");
inputTwo.style.margin = "10px";

inputTwo.addEventListener("keyup", function(event) {
    console.log(event.key, " This represents which key has been pressed ");
    console.log(event.code, " This represents which keyCode of that key");
} );

// This is an arrow direction basic game inside input:- 
let input3 = document.querySelector(".game");
input3.style.margin = " 10px";


input3.addEventListener("keydown", function(eve) {
    console.log(eve);

    if ( eve.code == "ArrowUp"){
        console.log(" Player is moving upwards");
    } else if (eve.code == "ArrowDown"){
        console.log("Player is moving DownWards");
    } else if ( eve.code == "ArrowLeft"){
        console.log("Player is moving left");
    } else if (eve.code == "ArrowRight"){
        console.log(" Player is moving at the right ");
    }
    
});

