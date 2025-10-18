let boxOne = document.querySelector(".box-one");
let boxTwo = document.querySelector(".box-two");
let boxThree = document.querySelector(".box-three");
let boxFour = document.querySelector(".box-four");

let page = document.querySelector("body");


// This is for the box One..
boxOne.addEventListener("mouseover", function() {
    page.style.backgroundColor = "#F4991A";
    boxOne.style.backgroundColor = "white";
});

boxOne.addEventListener("mouseleave", function() {
    page.style.backgroundColor = "white";
});

// This is for the box two..

boxTwo.addEventListener("mouseover", function() {
    page.style.backgroundColor = "#6B3F69";
    boxTwo.style.backgroundColor = "white";
});

boxTwo.addEventListener("mouseleave", function() {
    page.style.backgroundColor = "white";
});

// Now this is for box three.. 
boxThree.addEventListener("mouseover", function() {
    page.style.backgroundColor = "#8AA624";
    boxThree.style.backgroundColor = "white";
});

boxThree.addEventListener("mouseleave", function() {
    page.style.backgroundColor = "white";
});

// Now this is for box Four.. 

boxFour.addEventListener("mouseover", function() {
    page.style.backgroundColor = "#0ABAB5";
    boxFour.style.backgroundColor = "white";
});

boxFour.addEventListener("mouseleave", function() {
    page.style.backgroundColor = "white";
})
