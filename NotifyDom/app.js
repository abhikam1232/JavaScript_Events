let btn = document.querySelector("button");
btn.style.fontSize = "1.2em";
btn.style.padding = "10px";
btn.style.borderRadius = "15px";
btn.style.border = "none";

let body = document.querySelector("body");

let h3 = document.querySelector("h3");



btn.addEventListener("mouseenter", function(){
    let notif = document.createElement("div");
    notif.innerHTML = "✅ This is a notification! <br/> You cracked ur 1st job at JP Morgan Chase and Co ";

    // Now we will do styling of it:- 
    notif.style.height = "100px";
    notif.style.width = "300px";
    notif.style.borderWidth = "2px";
    notif.style.borderStyle = "solid";
    notif.style.borderColor = "green";
    notif.style.borderRadius = "8px";
    notif.style.boxShadow = " 2px 2px 10px black";
    notif.style.fontSize = "1.4em";
    notif.style.zIndex = "1000";

    h3.append(notif);

    setTimeout(function (){
        notif.remove();
    }, 2000);
    });

    
    

    