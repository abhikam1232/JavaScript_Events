// Now accessing all the elements from the form:- 
let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let age = document.querySelector("#num");
let span = document.querySelector("span");
let btn = document.querySelector("button");
btn.style.marginTop = "10px";

span.addEventListener("mouseenter", function(){
    span.style.backgroundColor = "#555555";
    span.style.color = "azure";
    span.style.borderWidth = "1px";
    span.style.borderStyle = "solid";
    span.style.borderColor = "black";
    span.style.borderRadius = "15px";
    span.style.paddingRight = "5px";
    span.style.paddingLeft = "5px";
    span.style.border = "none";
});



