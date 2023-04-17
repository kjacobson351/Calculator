let firstOperand = [];
let operator = ""
let secondOperand = [];
let operationDisplayVar;
let result


const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", assignOperands);

const twoButton = document.getElementById("2btn");
twoButton.addEventListener("click", assignOperands)

const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", assignOperator)

const equalsButton = document.getElementById("equals-btn");
equalsButton.addEventListener("click", operate)

const operationDisplay = document.getElementById("operation-display");

const resultDisplay = document.getElementById("result-display");

//lets user choose operands. On first round user chooses the first number, upon further operations the result of the operation is used for the first number.
function assignOperands() {
    if (operator === "" && result == undefined) {
        firstOperand.push(this.innerText);
        operationDisplayVar = firstOperand.join("")
        updateOperationDisplay();
    } else if (operator != "") {
        secondOperand.push(this.innerText)
        operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
        updateOperationDisplay();
    }
}

//lets operate func know which operation to perform
function assignOperator() {
    if (operator != this.innerText) {
        operator = this.innerText
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
    } else if (operator == this.innerText) {
        console.log("second if")
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
        secondOperand = [];
}
}


function updateOperationDisplay() {
    operationDisplay.innerText = operationDisplayVar;
};

//does operation based on operator then resets operator
function operate() {
    if (operator === "+") {
        result = arrayToInt(firstOperand) + arrayToInt(secondOperand)
        operationDisplayVar = result;
        updateOperationDisplay();
        //operator = "";
        firstOperand = [result];
        //secondOperand = [];
    }

};

//
function arrayToInt(array) {
    //let int = Array.prototype.join.call(array, "");
    let int = array.join("");
    return parseFloat(int);
}





//let testArray = ["1"]

//console.log(arrayToInt(testArray))

