let btn = document.querySelector(".bttn");
let weightInput = document.querySelector("#mass");
let heightInput = document.querySelector("#tall");
let head = document.querySelector("h4");
let main = document.querySelector(".major");
let table = document.querySelector(".chart");

table.style.marginTop = "100px";
table.style.marginLeft = "20px";
table.style.marginRight = "20px";
    
function BMI() {
    let value1 = weightInput.value; // These are values
    let value2 = heightInput.value;

    let result = (value1/(value2/100)**2);
    return result;
};

btn.addEventListener("click", function() {
    let par = document.createElement("p");
    main.appendChild(par);
    par.innerText = BMI();
    par.style.marginTop = "15px";
    
});