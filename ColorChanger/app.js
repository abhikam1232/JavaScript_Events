// Now Accessing elements:-
let changeBtn = document.querySelector("#change");
let input = document.querySelector(".input");
let applyBtn = document.querySelector("#apply");
let h1 = document.querySelector("h1");

// First thing we only need to deal with change button with changes the random color 


// this is major function taking help of minor one 
changeBtn.addEventListener("click", function() {
    let randomColor = getRandomColor(); // new var created and call back of minor func 
    h1.innerText = randomColor;

    let body = document.querySelector("body");
    body.style.backgroundColor = randomColor;


});


// This is minor helping the major one for changing the background color:- 
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

