const calculatorOutput = document.querySelector(".calculator__output");

// storage variables
let leftOperand = 0;
let rightOperand = 0;
let operator;
let result = 0;

// logic for display when buttons are pressed
const pressButton = (number) => {
    if (calculatorOutput.innerHTML == 0) {
        calculatorOutput.innerHTML = number;
    } else {
        calculatorOutput.innerHTML += number;
    }
}

// operator function
// WRITE AS SWITCH?
const pressOperator = (action) => {
    leftOperand = calculatorOutput.innerHTML;
    if (action == add) {
        operator = "add";
        calculatorOutput.innerHTML = 0;
        console.log("pressOperator")
    } else if (action == subtract) {
        operator = "subtract";
        calculatorOutput.innerHTML = 0;
    } else if (action == multiply) {
        opertor = "multiply";
        calculatorOutput.innerHTML = 0;
    } else if (action == divide) {
        operator = "divide";
        calculatorOutput.innerHTML = 0;
    }
}

// result function
// WRITE AS SWITCH?
// still need to assign to result and display in output     !!!
const resultFn = (leftOperand, rightOperand, operator) => {
    rightOperand = calculatorOutput.innerHTML;
    if (operator === "add") {
        let sum = add(leftOperand,rightOperand);
        result = sum;
        console.log("resultFn");
    } else if (operator === "subtract") {
        subtract(leftOperand, rightOperand);
        result = sum;
    } else if (operator === "multiply") {
        multiply(leftOperand, rightOperand);
        result = sum;
    } else if (operator === "divide") {
        divide(leftOperand, rightOperand);
        result = sum;
    }
    calculatorOutput.innerHTML = result;
}

// addition function
const add = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
}

// subtraction function
const subtract = (a, b) => {
    return a - b;
}

//  multiplication function
const multiply = (a, b) => {
    return a * b;
}

// division function
const divide = (a, b) => {
    return a / b;
}

// clear function - first line works - do last two?
const clearOutput = () => {
    calculatorOutput.innerHTML = 0;
    leftOperand = 0;
    rightOperand = 0;
}