let container = document.querySelector("div");
let text = document.querySelector("span");
let body = document.querySelector("body");

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
    text.innerText = "Mouseover applied ";
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

// Now we need to perform a task that whaen we scroll the page background color will change:- 
window.addEventListener("scroll", function() {
    let changeColor = randomcolorChanger();
    body.style.backgroundColor = changeColor;

});

function randomcolorChanger() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

// Now exloring load event:- 
let msg = document.querySelector("#msg");

window.addEventListener("load", function() {
    msg.innerText = " The page is still loading";
    msg.style.color = "pink";
    msg.style.fontSize = "1.4em";
});

