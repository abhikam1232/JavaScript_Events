let btn = document.querySelector("button");
btn.style.margin = "20px";
btn.style.marginLeft = "600px";
btn.style.fontSize = "1.3em";
btn.style.padding = "10px";

let par = document.querySelector("p");
let body = document.querySelector("body");

// Now main event which is happening through this code below:- 
let theme = "light";


btn.addEventListener("click", function () {
    if (theme == "light") {
        body.style.backgroundColor = "black";
        par.style.color = "whitesmoke";
        btn.innerText = "Go to maroon";
        btn.style.borderRadius = " 10px"; // styling 
        btn.style.fontFamily = "cursive"; // styling 
        theme = "dark";
    } else if (theme == "dark") {
        body.style.backgroundColor = "maroon";
        par.style.color = "whitesmoke";
        btn.innerText = "Go to orginal ";
        btn.style.borderRadius = "10px";
        theme = "maroon";
    } else if (theme == "maroon"){
        body.style.backgroundColor = "white";
        par.style.color = "grey";
        btn.innerText = "Welcome Home ";
        btn.style.borderRadius = "10px";
        theme = "org";
    } else {
        body.style.backgroundColor = "black";
        par.style.color = "whitesmoke";
        btn.innerText = "Go to maroon";
        btn.style.borderRadius = " 10px"; // styling 
        btn.style.fontFamily = "cursive"; // styling 
        theme = "light";

    }
});


