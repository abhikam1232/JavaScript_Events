let box = document.querySelector("input");
let h2 = document.querySelector("h2");
body = document.querySelector("body");



box.addEventListener("input", function(eve) {
    eve.preventDefault();
    h2.innerText = box.value;
    body.style.backgroundColor = "#CBCBCB";
});