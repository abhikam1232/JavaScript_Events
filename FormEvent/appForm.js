let form = document.querySelector("form");
form.style.margin = "10px";

form.addEventListener("submit", function(event) {
    alert("You Information has been submitted!!! ");
    event.preventDefault();
    console.dir(form);

    let input = this.elements[0];
    console.log(input.value);

    let password = this.elements[1];
    console.log(password.value);

});