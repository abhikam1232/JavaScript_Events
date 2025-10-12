let myBox = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");

form.addEventListener("submit", function(eve){
    eve.preventDefault();
})



myBox.addEventListener("change", function(){
    console.log(" Change Event");
    console.log("final value = ", this.value);
});


// This is my input event.. 
myBox.addEventListener("input", function() {
    console.log(" This is input event");
    console.log(" final value = ", this.value);
})

// Task:- Live name display with final confirmation..

let input = document.querySelector("#inp");
let bttn = document.querySelector(".btn");


// This is used to check the live name of the user...
input.addEventListener("input", function(){
    console.log(" This will check each alpahbet as we type the name:- ");
    console.log("Final input ", this.value);
});

// And this is used to check whether the user has entered his name at the final using change...
input.addEventListener("change", function() {
    console.log("change event for name checking");
    console.log("Your complete name:- ", this.value);
});

// When the user selects a color from a dropdown, the background color of the page should change.
// We’ll use the change event to detect which color is chosen.

let drop = document.querySelector(".color");

drop.addEventListener("change", function() {

    let selectedColor = this.value;

    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
        console.log("background color changes to:- ", selectedColor);
    } else {
        document.body.style.backgroundColor = "white";
    }

});