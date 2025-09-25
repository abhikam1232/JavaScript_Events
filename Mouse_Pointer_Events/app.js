let btn = document.querySelector("button"); // Button Accessed 
console.dir(btn);
btn.style.color = " black ";
btn.style.backgroundColor = "#FFEBCD";


btn.onclick = function() {
    console.info(" This button was clicked to perform some action");
    alert(" I think btn has clicked now!! ");
};


