let container = document.querySelector("div");
let text = document.querySelector("span");

container.addEventListener("mouseout", function(eve) {
    eve.preventDefault();
    container.style.backgroundColor = "#708A58";
    container.style.color = "#ecf3e6ff";
    text.innerText = " Mouseout Applied";
    container.style.borderRadius = "18px";
});

container.addEventListener("mouseover", function() {
    container.style.color = "#000000";
    container.style.backgroundColor = "#748873";
    text.innerText = "I am the orignal box ";
});

// Now we are exploring the keypress event:- 
let btn = document.querySelector("button");
btn.style.marginLeft = "710px";
btn.style.fontSize = "1.3em";
btn.style.padding = "5px";

btn.addEventListener("keydown", function () {
    container.style.backgroundColor = "#3B060A";
    container.style.color = "white";
    text.innerText = "Keypress event has Activated";
}); 