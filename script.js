let firstOperand = [];
let operator = ""
let secondOperand = [];
let operationDisplayVar = "";
let result
let justOperated = false;
let timesRan = 0;
let currentOperand = "";

const zeroButton = document.getElementById("0btn");
zeroButton.addEventListener("click", assignOperands);

const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", assignOperands);

const twoButton = document.getElementById("2btn");
twoButton.addEventListener("click", assignOperands)

const threeButton = document.getElementById("3btn");
threeButton.addEventListener("click", assignOperands);

const fourButton = document.getElementById("4btn");
fourButton.addEventListener("click", assignOperands);

const fiveButton = document.getElementById("5btn");
fiveButton.addEventListener("click", assignOperands);

const sixButton = document.getElementById("6btn");
sixButton.addEventListener("click", assignOperands);

const sevenButton = document.getElementById("7btn");
sevenButton.addEventListener("click", assignOperands);

const eightButton = document.getElementById("8btn");
eightButton.addEventListener("click", assignOperands);

const nineButton = document.getElementById("9btn");
nineButton.addEventListener("click", assignOperands);

const decButton = document.getElementById("dec-btn");
decButton.addEventListener("click", assignOperands)



const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", assignOperator)

const plusMinusButton = document.getElementById("plus-minus-btn")
plusMinusButton.addEventListener("click", togglePlusMinus)

const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener("click", reset);

const equalsButton = document.getElementById("equals-btn");
equalsButton.addEventListener("click", operate)

const operationDisplay = document.getElementById("operation-display");

const resultDisplay = document.getElementById("result-display");



function assignOperands() {
    switch (true) {


        //allows user to start a new operation by pressing a new number after an operation.
        case (justOperated === true):
            reset();
            firstOperand.push(this.innerText);
            currentOperand = 1;
            operationDisplayVar = firstOperand.join("")
            console.log("new operation")
            updateOperationDisplay();

            break;
        //assigns first operand
        case (operator === "" && result == undefined):
            console.log("first operand assigned / updated")
            firstOperand.push(this.innerText);
            currentOperand = 1;
            operationDisplayVar = firstOperand.join("")
            updateOperationDisplay();
            break;

        //lets user enter operator first
        case (operator != "" && firstOperand.length == 0):
            console.log("first operand = 0, first digit of second operand assigned")
            firstOperand = [0];
            secondOperand.push(this.innerText)
            currentOperand = 2;
            operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
            updateOperationDisplay();
            //timesRan = 0;
            break;


        case (operator != "" && firstOperand.length > 0):
            console.log("second operand assigned / updated")
            secondOperand.push(this.innerText)
            currentOperand = 2;
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
    if (operationDisplayVar.includes(this.innerText)) {
        console.log("operator already in display")
    } else
        switch (true) {


            case (operator != this.innerText):
                console.log("operator assigned")
                operator = this.innerText
                justOperated = false;
                operationDisplayVar = operationDisplayVar + operator;
                updateOperationDisplay();
                timesRan = 0;
                break;

            //allows display to update the operator to the display after the result of an operation
            case (operator == this.innerText && result != undefined):
                console.log("new operation operator assigned")
                operationDisplayVar = operationDisplayVar + operator;
                justOperated = false;
                updateOperationDisplay();
                secondOperand = [];
                timesRan = 0;
                break;

            /*// below code is now redunant...i think...
                    case (operator == this.innerText):
                        console.log("assign Op 2nd if")
                        //operationDisplayVar = operationDisplayVar + operator;
                        justOperated = false;
                        updateOperationDisplay();
                        secondOperand = [];
                        timesRan = 0;
                        break;
            
                        */
            /*
                    case (firstOperand.length == 0 && secondOperand.length == 0 && result == undefined):
                        console.log("assign Op 3rd if")
                        operator = this.innerText;
                        operationDisplayVar = "";
                        operationDisplayVar = operationDisplayVar + operator;
                        justOperated = false;
                        timesRan = 0;
                        updateOperationDisplay()
                        break;
                        */
        }
}

function togglePlusMinus() {
    switch (true) {
        //changes first operand to negative if it is active and positive
        case (currentOperand === 1 && arrayToInt(firstOperand) > 0):
            firstOperand.unshift("-");
            operationDisplayVar = firstOperand.join("")
            updateOperationDisplay();
            break;
        //changes first operand to positive if its active and negative
        case (currentOperand === 1 && arrayToInt(firstOperand) < 0):
            firstOperand = arrayToInt(firstOperand)
            firstOperand = [firstOperand *= -1];
            operationDisplayVar = firstOperand.join("")
            updateOperationDisplay();
            break;
        //changes second operand to negative if it is active and positive
            case (currentOperand === 2 && arrayToInt(secondOperand) > 0):
                secondOperand.unshift("-");
                operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
                updateOperationDisplay();
                break;
            //changes second operand to positive if its active and negative
        case (currentOperand === 2 && arrayToInt(secondOperand) < 0):
            secondOperand = arrayToInt(secondOperand);
            secondOperand = [secondOperand *= -1];
            operationDisplayVar = firstOperand.join("") + operator + secondOperand.join("");
            updateOperationDisplay();
            break;

    }

}


function updateOperationDisplay() {
    operationDisplay.innerText = operationDisplayVar;
};




function operate() {
    switch (true) {
        //stops user from making an inconplete operation ex: user only hits =
        case (operator == ""):
            console.log("no operator")
            break;

        //stops user from making an incomplete operation ex: user hits +=
        case (operator != "" && firstOperand.length == 0 && secondOperand.length == 0):
            console.log("no operands")
            break;

        //allows += functionality ex 1+=
        case (operator === "+" && secondOperand.length == 0):
            if (timesRan == 0) {
                console.log("+=")
                result = arrayToInt(firstOperand)
                result = Math.round(result * 1000) / 1000
                timesRan++;
                operationDisplayVar = result.toString();
                updateOperationDisplay();
                justOperated = true;
                firstOperand = [result];
                currentOperand = 1;
            } else if (timesRan > 0) {
                console.log("+=")
                result = arrayToInt(firstOperand) + (arrayToInt(firstOperand) / timesRan);
                result = Math.round(result * 1000) / 1000
                timesRan++;
                operationDisplayVar = result.toString();
                updateOperationDisplay();
                justOperated = true;
                firstOperand = [result];
                currentOperand = 1;
            }
            break;

        //
        case (operator === "+"):
            console.log("summed")
            result = arrayToInt(firstOperand) + arrayToInt(secondOperand)
            result = Math.round(result * 1000) / 1000
            operationDisplayVar = result.toString()
            updateOperationDisplay();
            justOperated = true;
            firstOperand = [result];
            currentOperand = 1;
            break;
    }
}

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
    timesRan = 0;
}



//let testArray = ["1"]

//console.log(arrayToInt(testArray))

