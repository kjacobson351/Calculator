let firstOperand = [];
let operator = ""
let secondOperand = [];
let operationDisplayVar = "";
let result
let justOperated = false;



const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", assignOperands);

const twoButton = document.getElementById("2btn");
twoButton.addEventListener("click", assignOperands)

const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", assignOperator)

const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener("click", reset);

const equalsButton = document.getElementById("equals-btn");
equalsButton.addEventListener("click", operate)

const operationDisplay = document.getElementById("operation-display");

const resultDisplay = document.getElementById("result-display");

/*
function assignOperand() {
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
        
    }
}
*/

function assignOperands() {
    switch (true) {
        //first input is firstOperand

        case (justOperated === true):
            reset();
            firstOperand.push(this.innerText);
            operationDisplayVar = firstOperand.join("")
            updateOperationDisplay();

            break;

        case (operator === "" && result == undefined):
            console.log("assignOperands if 1")
            firstOperand.push(this.innerText);
            operationDisplayVar = firstOperand.join("")
            updateOperationDisplay();
            break;

        //lets user enter operator first
        case (operator != "" && firstOperand.length == 0):
            console.log("assignOperands if 2")
            firstOperand = [0];
            secondOperand.push(this.innerText)
            operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
            updateOperationDisplay();
            break;


        case (operator != "" && firstOperand.length > 0):
            console.log("assignOperands if 3")
            secondOperand.push(this.innerText)
            operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
            updateOperationDisplay();
            break;
    }
}

/*
//lets operate func know which operation to perform
function assignOperator() {
    //assigns Operator if first operand is already chosen
    if (operator != this.innerText && firstOperand.length > 0) {
        console.log("assign Op 1st if")
        operator = this.innerText
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
        //will not add an additional operator to screen if user clicks twice
    } else if (operator == this.innerText) {
        console.log("assign Op 2nd if")
        //operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay();
        secondOperand = [];

    }else if (firstOperand.length == 0 && secondOperand.length == 0 && result == undefined) {
        console.log("assign Op 3rd if")
        operator = this.innerText;
        operationDisplayVar = "";
        operationDisplayVar = operationDisplayVar + operator;
        updateOperationDisplay()
    }
};
*/
function assignOperator() {
    switch (true) {

        case (operator != this.innerText):
            console.log("assign Op 1st if")
            operator = this.innerText
            justOperated = false;
            operationDisplayVar = operationDisplayVar + operator;
            updateOperationDisplay();
            break;

        /*
        case (operator == this.innerText && operationDisplayVar.includes("+")) :
            console.log(operator)
            //operationDisplayVar = operationDisplayVar + operator;
            updateOperationDisplay();
            secondOperand = [];
            break;*/

        case (operator == this.innerText):
            console.log("assign Op 2nd if")
            operationDisplayVar = operationDisplayVar + operator;
            justOperated = false;
            updateOperationDisplay();
            secondOperand = [];
            break;

        case (firstOperand.length == 0 && secondOperand.length == 0 && result == undefined):
            console.log("assign Op 3rd if")
            operator = this.innerText;
            operationDisplayVar = "";
            operationDisplayVar = operationDisplayVar + operator;
            justOperated = false;
            updateOperationDisplay()
            break;
    }
}


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
        operationDisplayVar = result
        updateOperationDisplay();
        justOperated = true;
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

function reset() {
    firstOperand = [];
    operator = ""
    secondOperand = [];
    operationDisplayVar = "";
    result = undefined;
    justOperated = "false"
    updateOperationDisplay();
}



//let testArray = ["1"]

//console.log(arrayToInt(testArray))

