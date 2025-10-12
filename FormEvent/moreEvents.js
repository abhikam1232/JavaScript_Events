let myBox = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");

form.addEventListener("submit", function(eve){
    eve.preventDefault();
})



myBox.addEventListener("change", function(){
    console.log(" The value has been changed");
    console.log("final value = ", this.value);
});

