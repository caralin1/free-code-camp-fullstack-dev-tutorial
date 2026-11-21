/* ERROR MESSAGE
let errorParagraph = document.getElementById("error")
function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}
*/

/* CALCULATOR */
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    document.getElementById("sum-el").textContent = "Sum: " + (num1+num2);
}

function subtract() {
    document.getElementById("sum-el").textContent = "Sum: " + (num1-num2);
}

function divide() {
    document.getElementById("sum-el").textContent = "Sum: " + (num1/num2);
}

function multiply() {
    document.getElementById("sum-el").textContent = "Sum: " + (num1*num2);
}