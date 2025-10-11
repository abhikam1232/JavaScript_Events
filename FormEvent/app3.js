// Now accessing all the elements from the form:- 
let user = document.querySelector("#name");
let mail = document.querySelector("#mail");
let age = document.querySelector("#num");
let span = document.querySelector("span");
let btn = document.querySelector("button");
let form = document.querySelector("form");
let gender = document.querySelector("#gender");
btn.style.marginTop = "10px";


// This Section was for the span tag:- 
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

form.addEventListener("submit", function(eve) {
    eve.preventDefault();
    console.info(`This is my registered name:- ${user.value}`);
    console.info(`This mail id you have Registered ${mail.value}`);
    console.info(`Password is hidden due to legal Restrictions :- ****`);
    
    /**if (gender.value == "male"){
        console.info("male");
    } else{
        console.info("female");
    } **/ // In contruction.. 


} );





