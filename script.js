let firstOperand = [];
let operator = ""
let secondOperand = [];
let displayVar

const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", updateDisplay);

const twoButton = document.getElementById("2btn");
twoButton.addEventListener("click", updateDisplay)

const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", assignOperator)

const display = document.getElementById("display");


function updateDisplay(){
    if (operator === "") {
        firstOperand.push(this.innerText)
        display.innerText = firstOperand.join("")
    } else if (operator != "") {
        secondOperand.push(this.innerText)
        display.innerText = firstOperand.join("") + operator + secondOperand.join("");
    }
}

function assignOperator(){
    operator = this.innerText
    display.innerText = firstOperand.join("") + operator
}

function add(firstOperand,secondOperand) {
    
}

console.log(firstOperand)

function clear(){
firstOperand = [];
operator = ""
secondOperand = [];
displayVar = "";
}

clear()