let container = document.querySelector("div");
let text = document.querySelector("span");

container.addEventListener("mouseout", function(eve) {
    eve.preventDefault();
    container.style.backgroundColor = "#708A58";
    container.style.color = "#ecf3e6ff";
    text.style.innerText = " Mouseout Applied";
    container.style.borderRadius = "18px";
});

container.addEventListener("mouseover", function() {
    container.style.color = "#000000";
    container.style.backgroundColor = "#748873";
    text.style.innerText = "I am the orignal box ";
});