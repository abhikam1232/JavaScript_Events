let input = document.querySelector("#input");
input.style.marginTop = "20px";
input.style.fontSize = "1.1em";

let btnAdd = document.querySelector("#add");
btnAdd.style.paddingLeft = "5px";
btnAdd.style.paddingRight = "5px";

let btnRemove = document.querySelector("#Remove");
btnRemove.style.paddingLeft = "5px";
btnRemove.style.paddingRight = "5px";

// Create ul and append to body or a specific container
let ul = document.createElement("ul");
document.body.appendChild(ul); // Append to body instead of div

// Adding tasks
btnAdd.addEventListener("click", function() {
    let task = input.value.trim();
    
    if (task !== "") {
        let li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
        input.value = "";
    }
});

// Removing tasks
btnRemove.addEventListener("click", function() {
    let lastTask = ul.lastElementChild;
    
    if (lastTask) {
        ul.removeChild(lastTask);
    }
});