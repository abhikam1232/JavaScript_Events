let par = document.querySelector("p");

par.addEventListener( "click", function() {
    console.info(" This Para is basically Clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    for ( let i=0; i<=5; i++){
        console.info(" Cursor has been on the Mouse");
    }
})