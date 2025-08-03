const display = document.getElementById("display");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const clearAllButton = document.getElementById("clear-all");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");

function checkErrorState() {
    const isError = display.innerHTML === "Error";
    const buttonsToDisable = [
        addButton, subtractButton, multiplyButton, divideButton, 
        equalsButton, decimalButton, zeroButton, oneButton, 
        twoButton, threeButton, fourButton, fiveButton, 
        sixButton, sevenButton, eightButton, nineButton
    ];
    buttonsToDisable.forEach(button => {
        button.disabled = isError;
        if (isError) {
            button.style.opacity = "0.5";
            button.style.cursor = "not-allowed";
        } else {
            button.style.opacity = "1";
            button.style.cursor = "pointer";
        }
    });
    clearAllButton.disabled = false;
    deleteButton.disabled = false;
    clearAllButton.style.opacity = "1";
    deleteButton.style.opacity = "1";
    clearAllButton.style.cursor = "pointer";
    deleteButton.style.cursor = "pointer";
}

addButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "+";
    }
    checkErrorState();
});
subtractButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "-";
    }
    checkErrorState();
});
multiplyButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "x";
    }
    checkErrorState();
});
divideButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "÷";
    }
    checkErrorState();
});
equalsButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    let expression = display.innerHTML;
    expression = expression.replace(/x/g, "*");
    expression = expression.replace(/÷/g, "/");
    const lastCharakter = expression.slice(-1);
    if (["+", "-", "*", "/"].includes(lastCharakter)) {
        return;
    }
    try {
        const result = eval(expression);
        updateDisplay(result);
    } catch (error) {
        display.innerText = "Error";
    }
    checkErrorState();
});
function updateDisplay(result) {
    if (isNaN(result) || result === Infinity || result === -Infinity) {
        display.innerText = "Error";
    } else {
        display.innerText = result;
    }
    checkErrorState();
}
clearAllButton.addEventListener("click", function() {
    display.innerHTML = "";
    checkErrorState();
});
deleteButton.addEventListener("click", function() {
    if (display.innerHTML === "Infinity" || display.innerHTML === "Error") {
        display.innerHTML = "";
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
    checkErrorState();
});
decimalButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += ".";
    }
    checkErrorState();
});
zeroButton.addEventListener("click", function() {
    display.innerHTML += "0";
    checkErrorState();
});
oneButton.addEventListener("click", function() {
    display.innerHTML += "1";
    checkErrorState();
});
twoButton.addEventListener("click", function() {
    display.innerHTML += "2";
    checkErrorState();
});
threeButton.addEventListener("click", function() {
    display.innerHTML += "3";
    checkErrorState();
});
fourButton.addEventListener("click", function() {
    display.innerHTML += "4";
    checkErrorState();
});
fiveButton.addEventListener("click", function() {
    display.innerHTML += "5";
    checkErrorState();
});
sixButton.addEventListener("click", function() {
    display.innerHTML += "6";
    checkErrorState();
});
sevenButton.addEventListener("click", function() {
    display.innerHTML += "7";
    checkErrorState();
});
eightButton.addEventListener("click", function() {
    display.innerHTML += "8";
    checkErrorState();
});
nineButton.addEventListener("click", function() {
    display.innerHTML += "9";
    checkErrorState();
});
