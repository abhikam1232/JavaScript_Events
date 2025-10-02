// Now we are understanding this in EventListener.. 
let button = document.querySelector("button");

button.addEventListener( "click", function() {
    this.style.backgroundColor = "pink";
    this.style.color = "black";
    console.log(this.innerText);
    this.style.fontSize = "1.3em";

});

/** let h3 = document.querySelector("h3");
h3.addEventListener("click", function() { // This is the old method 
    h3.style.backgroundColor = "aqua";
});

function changeColor() {
    console.log(" Color will chnage");
    this.style.backgroundColor = "grey";
};

let h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor); **/

// Now this is the code again for this EventListener:-

let h1 = document.querySelector("h1"); // In this section we selcted these elements 
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let par = document.querySelector("p");

function darkMode() {
    this.style.backgroundColor = "black";
    this.style.color = "azure";
};

h1.addEventListener("click", darkMode);

h2.addEventListener("click", darkMode);

h3.addEventListener("click", darkMode);

par.addEventListener("click", darkMode);





