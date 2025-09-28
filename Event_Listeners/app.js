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
});
