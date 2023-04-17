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


function assignOperands() {
    //lets first number input be used as first operand
    if (operator === "" && result == undefined) {
        console.log("assignOperands if 1")
        firstOperand.push(this.innerText);
        operationDisplayVar = firstOperand.join("")
        updateOperationDisplay();
        //allows user to enter operator before first operands ex: +1 = 0+1 also allows user to repeat operation with only = button
    } else if (operator != "" && firstOperand.length == 0) {
        console.log("assignOperands if 2")
        firstOperand = [0];
        secondOperand.push(this.innerText)
        operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
        updateOperationDisplay();
        // allows user to set second Operand if firstOperand and operator are chosen
    } else if (operator != "" && firstOperand.length > 0) {
        console.log("assignOperands if 3")
        secondOperand.push(this.innerText)
        operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
        updateOperationDisplay();
        /*//
    } else if (operator != "" && result != undefined) {
        console.log("assignOperands if 4")
        secondOperand.push(this.innerText)
        operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
        updateOperationDisplay()
*/
    }
}

//lets operate func know which operation to perform
function assignOperator() {
    if (operator != this.innerText && firstOperand.length > 0) {
        operator = this.innerText
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
    } else if (operator == this.innerText) {
        console.log("second if")
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
        secondOperand = [];
    } else if (firstOperand.length == 0 && secondOperand.length == 0 && result == undefined) {
        operator = this.innerText;
        operationDisplayVar = "";
        updateOperationDisplay()
    }
};


function updateOperationDisplay() {
    operationDisplay.innerText = operationDisplayVar;
};

//does operation based on operator then resets operator
function operate() {
    if (operator == "") {
        console.log("no operator")
    } else if (operator != "" && firstOperand.length == 0 && secondOperand.length == 0) {
        console.log("no operands")
    } else if (operator === "+") {
        result = arrayToInt(firstOperand) + arrayToInt(secondOperand)
        operationDisplayVar = result;
        updateOperationDisplay();
        //operator = "";
        firstOperand = [result];
        //secondOperand = [];
    } else if (operator != "" && firstOperand.length == 0 && secondOperand.length == 0) {
        console.log("no operands")
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

