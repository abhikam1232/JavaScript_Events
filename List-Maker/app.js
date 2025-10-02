let input = document.querySelector("#input");
input.style.marginTop = "20px";
input.style.fontSize = "1.1em";

let btnAdd = document.querySelector("#add"); // Add Button Section 
btnAdd.style.paddingLeft = "5px";
btnAdd.style.paddingRight = "5px";

let btnRemove = document.querySelector("#Remove"); // Remove Button Section 
btnRemove.style.paddingLeft = "5px";
btnRemove.style.paddingRight = "5px";

let div = document.querySelector("div");

let ul = document.createElement("ul"); // New ul created 
div.appendChild(ul);



// Adding tasks inside the box:-
btnAdd.addEventListener("click", function() {
    let task = input.value.trim();

    if ( task !== ""){
        let li = document.createElement("li");
    

    li.textContent = task;

    ul.appendChild(li);

    input.value = "";
    }
});



btnRemove.addEventListener("click", function() {
    // Select the last list item in the <ul>
    let lastTask = ul.lastElementChild;

    // Check if there is a last task to remove
    if (lastTask) {
        // Remove that task from the <ul>
        ul.removeChild(lastTask);
    }
});