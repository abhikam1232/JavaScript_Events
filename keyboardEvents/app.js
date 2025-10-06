let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    console.log(event);
    console.log("Button has been clicked !!");
});

btn.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("Button has been Clicked !!");
})