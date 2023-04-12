let displayArray = [6,9,4,2,0];

const oneButton = document.getElementById("1btn");
oneButton.addEventListener("click", updateDisplay);

const display = document.getElementById("display");

function updateDisplay(){
    display.innerText = displayArray;
}



function test(){
    console.log("TEST")
}