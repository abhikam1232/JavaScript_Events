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

// Now performing next task of this.. 

function hoverMe() {
    this.style.backgroundColor = "yellow";
    this.style.color = "black";
    this.style.fontWeight = "bold";
};

function noHover() {
    this.style.backgroundColor = "white";
    this.style.color = "black";
    this.style.fonSize = "normal";
}

// Now giving this function to each element..

h1.addEventListener("mouseenter", hoverMe);
h1.addEventListener("mouseleave", noHover);

h2.addEventListener("mouseenter", hoverMe);
h2.addEventListener("mouseleave", noHover);

h3.addEventListener("mouseenter", hoverMe);
h3.addEventListener("mouseleave", noHover);

par.addEventListener("mouseenter", hoverMe);
par.addEventListener("mouseleave", noHover);


//Create a function that, when you click on any element (h2, h3, p, and button), it changes the inner text of that element to say "You clicked me!", but when you double-click it, it should reset back to the original text.

let two = document.querySelector(".headerTwo"); // Accessed all elemnts for performings task:- 
let three = document.querySelector(".headerThree");
let para = document.querySelector(".paragraph");
let btn = document.querySelector("#unique");

function clickmeNow () {
    this.innerText = "You Clicked ME $$$ "; // This is comman for all
};

function reverseClick() {
    let a = "Asus Vivobook Click"; // This is for header two 
    this.innerText = a;
};

function reverseClickTwo () {
    let b = "Events in JavaScript performing tasks"; // This is for header three
    this.innerText = b;
};

function reverseClick3 () {
    let c = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa blanditiis optio exercitationem, officiis et neque obcaecati eum excepturi dolorum adipisci voluptatibus, voluptatem dolores modi porro commodi tenetur quos quae deleniti?";
    this.innerText = c;    // This is for paragraph 
};

function reverseBtn() {
    this.innerText = "Touch me now";
    this.style.color = "green";
    this.style.backgroundColor = "AliceBlue";
    this.style.fontSize = "1.3em";
    this.style.borderWidth = "2px";
    this.style.borderStyle = "solid";
    this.style.borderColor = "maroon";

    setTimeout( function() {
        removeEventListener.btn();
    }, 2000);
}

two.addEventListener("click", clickmeNow);
two.addEventListener("dblclick", reverseClick);

three.addEventListener("click", clickmeNow);
three.addEventListener("dblclick", reverseClickTwo);

para.addEventListener("click", clickmeNow);
para.addEventListener("dblclick", reverseClick3);

btn.addEventListener("click", clickmeNow);
btn.addEventListener("click", reverseBtn);