let input = document.querySelector("#input");
let btnAdd = document.querySelector("#add");
let btnRemove = document.querySelector("#Remove");
let container = document.querySelector("div");

// Create the <ul> list ONCE and add it to the page
let ul = document.createElement("ul");
container.appendChild(ul);

// --- ADDING TASKS ---
btnAdd.addEventListener("click", function() {
    let task = input.value.trim();

    if (task !== "") {
        let li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
        input.value = ""; // Clear the input
        input.focus(); // Focus back on the input
    }
});

// --- REMOVING THE LAST TASK ---
btnRemove.addEventListener("click", function() {
    let lastTask = ul.lastElementChild;
    if (lastTask) {
        ul.removeChild(lastTask);
    }
});