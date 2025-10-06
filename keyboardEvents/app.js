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

input.addEventListener("keyup", function(event) {
    console.log(event);
    console.log(" Now you have released a key");
});
