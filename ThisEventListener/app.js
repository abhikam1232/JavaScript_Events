// Now we are understanding this in EventListener.. 
let button = document.querySelector("button");

button.addEventListener( "click", function() {
    this.style.backgroundColor = "pink";
    this.style.color = "black";
    console.log(this.innerText);
    this.style.fontSize = "1.3em";

});

let h3 = document.querySelector("h3");
h3.addEventListener("click", function() { // This is the old method 
    h3.style.backgroundColor = "aqua";
});

function changeColor() {
    console.log(" Color will chnage");
    this.style.backgroundColor = "grey";
};

let h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);

