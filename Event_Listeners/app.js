let btn = document.querySelector("button");

btn.addEventListener( "click", function() {
    console.info(" This button has been clicked");
    alert( " You clicked it");
} );


// Now  double clicke using event listener:- 

let myButton = document.querySelector("#myBtn"); 
myButton.style.marginTop = "20px";

myButton.addEventListener("dblclick", function() {
    console.log(" This button has been doble clicked");
    myButton.innerText = "Button";
    myButton.style.color = "blue";
    myButton.backgroundColor = " whitesmoke";
    alert(" Button has been clicked");
});


// New task of contextmenu:- 

let contextBtn = document.querySelector("#context");
contextBtn.style.margin = "20px";

contextBtn.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert(" Right Custom has been accessed");
    contextBtn.style.backgroundColor = " red";
    contextBtn.innerText = " Right clicked";
});

