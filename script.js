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

addButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "+";
    }
});
subtractButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "-";
    }
});
multiplyButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "x";
    }
});
divideButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += "÷";
    }
});
equalsButton.addEventListener("click", function() {
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
    if (display.innerHTML === "") {
        display.innerHTML = "";
    }
});
function updateDisplay(result) {
    if (isNaN(result) || result === Infinity || result === -Infinity) {
        display.innerText = "Error";
    } else {
        display.innerText = result;
    }
}
clearAllButton.addEventListener("click", function() {
    display.innerHTML = "";
});
deleteButton.addEventListener("click", function() {
    if (display.innerHTML === "Infinity" || display.innerHTML === "Error") {
        display.innerHTML = "";
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
});
decimalButton.addEventListener("click", function() {
    if (display.innerHTML === "") return;
    const lastCharakter = display.innerHTML.slice(-1);
    if (lastCharakter >= '0' && lastCharakter <= '9') {
        display.innerHTML += ".";
    }
});
zeroButton.addEventListener("click", function() {
    display.innerHTML += "0";
});
oneButton.addEventListener("click", function() {
    display.innerHTML += "1";
});
twoButton.addEventListener("click", function() {
    display.innerHTML += "2";
});
threeButton.addEventListener("click", function() {
    display.innerHTML += "3";
});
fourButton.addEventListener("click", function() {
    display.innerHTML += "4";
});
fiveButton.addEventListener("click", function() {
    display.innerHTML += "5";
});
sixButton.addEventListener("click", function() {
    display.innerHTML += "6";
});
sevenButton.addEventListener("click", function() {
    display.innerHTML += "7";
});
eightButton.addEventListener("click", function() {
    display.innerHTML += "8";
});
nineButton.addEventListener("click", function() {
    display.innerHTML += "9";
});
