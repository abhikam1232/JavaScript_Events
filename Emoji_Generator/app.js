let btn = document.querySelector("button"); // btn access 
btn.style.fontSize = "1.2em";  // size 

let div = document.querySelector("div"); // access div 

btn.addEventListener( "click", function() {  // main eventlistener 
    console.log(" New emoji generating"); // 
    let h2 = document.querySelector("h2");

    let randomEmoji = getrandomEmoji(); 
    h2.innerText = randomEmoji;

    div.innerText = array[randomEmoji];
    
})




let array = ["😀","😂","😍","😎","🤔","😭","😡","😴","🥳","🤖"]; // g;lobal 

function getrandomEmoji(length = array.length) { // minor function helping event listner  
    
    let create = Math.floor(Math.random() * length);
    return create;

}

