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
