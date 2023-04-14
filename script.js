let firstOperand = [];
let operator = ""
let secondOperand = [];
let operationDisplayVar

const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", assignOperands);

const twoButton = document.getElementById("2btn");
twoButton.addEventListener("click", assignOperands)

const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", assignOperator)

const operationDisplay = document.getElementById("operation-display");


function assignOperands() {
    if (operator === "") {
        firstOperand.push(this.innerText);
        operationDisplayVar = firstOperand.join("")
        updateOperationDisplay();
    } else if (operator != "") {
        secondOperand.push(this.innerText)
        operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
        updateOperationDisplay();
    }
}

function assignOperator() {
    if (operator != this.innerText) {
        operator = this.innerText
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
    }

}


function updateOperationDisplay() {
    operationDisplay.innerText = operationDisplayVar;
};

function add(firstOperand, secondOperand) {

}



function clear() {
    firstOperand = [];
    operator = ""
    secondOperand = [];
    operationDisplayVar = "";
}

clear()