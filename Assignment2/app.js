let btn = document.querySelector(".green");
let body = document.querySelector("body");

btn.style.marginLeft = "700px";
btn.style.marginTop = "200px";
btn.style.fontSize = "1.7em";
btn.style.paddingLeft = "5px";
btn.style.paddingRight = "5px"
btn.style.fontFamily = "cursive";
btn.style.borderRadius = "10px";


btn.addEventListener("click", function() {
    btn.innerText = "You clicked the Button";
    btn.style.backgroundColor = "#91C4C3";
    btn.style.color = "#334443";
    body.style.backgroundColor = "#D9E9CF";
    
});


