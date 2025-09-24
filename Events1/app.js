let par = document.querySelector("p");
par.style.color = "red";

// For the next tasks;

let newPar = document.querySelector("#newPara");
let newBtn = document.querySelector("#newBtn");


newBtn.onclick = function() {
    if ( newPar.innerText = "Hello sir Student here"){
        newPar.innerText = "  Will Graduate in 2026";
    } else{
        newPar.innerText = " Coder here ";
    }
}

// Now changing the color..
let newChange = document.querySelector("#newBtn");
newChange.style.fontSize = " 1.2em";
newChange.style.backgroundColor = "whitesmoke";
newChange.style.color = "green";


