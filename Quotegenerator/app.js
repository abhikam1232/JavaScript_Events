let h3 = document.querySelector("h3"); // Access h3 tag:- 
h3.style.fontSize = "1.8em";

let div = document.querySelector("div"); // Accessing the div which is the box:- 

let btn = document.querySelector("button");
btn.style.fontSize = "1.4em";

btn.addEventListener("dblclick", function() {
    console.info(" A new quote is generating");
    btn.innerText = "Press Again !!";
    btn.style.color = "whitesmoke"; // Operations for button 
    btn.style.backgroundColor = "grey"; // Operations for button 


    let myRandom = getrandomQuote();
    h3.innerText = "Quotes are in process";

    div.innerText = quotes[myRandom];



});




let quotes = ["Dream big, start small, but most of all, start.",
     "Success comes to those who work while others are sleeping", 
     "Courage is not the absence of fear, but persistence.",
     "Discipline beats motivation when the journey gets really tough",
];


function getrandomQuote(length = quotes.length) {
    let generate = Math.floor(Math.random() * length);
    return generate;

}

