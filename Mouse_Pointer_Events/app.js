let btn = document.querySelector("button"); // Button Accessed 
console.dir(btn);
btn.style.color = " black ";
btn.style.backgroundColor = "#FFEBCD";


btn.onclick = function () {
    console.info(" This button was clicked to perform some action");
    alert(" I think btn has clicked now!! ");
};

/** New Practice Task (DOM Event + Style Change + Text Change)
👉 Task:

Make a <p> tag with some text (e.g., "I am learning JS").
Add a button that says "Change Text & Color".
When the button is clicked:

Change the <p> text to "Wow! DOM events are working 🚀"

Change its color to blue and font size to 20px.

Also log a message in the console saying "Paragraph updated successfully!". */

let btn2 = document.querySelector("#one");
let para = document.querySelector("#pOne");

btn2.style.margin= "20px";




btn2.onclick = function () {
    para.innerText = " Wow!! Dom events are Working";
    btn2.style.color = "blue";
    btn2.style.fontSize = "20px";
    console.info(" Paragraph updated SucessFully ");
    para.style.fontSize = "1.3em";
    btn2.style.backgroundColor = "aqua";
}




