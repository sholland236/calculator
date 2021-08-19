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

// clear function - first line works - do last two?
const clearOutput = () => {
    calculatorOutput.innerHTML = 0;
    leftOperand = 0;
    rightOperand = 0;
}

// create a variable and function to set operator       !!!

// result function
// still need to assign to result and display in output     !!!
const resultFn = (leftOperand, rightOperand, operator) => {
    if (operator.id === "add") {
        let sum = add(leftOperand,rightOperand);
        result = sum;
    } else if (operator.id === "subtract") {
        subtract(leftOperand, rightOperand);
    } else if (operator.id === "multiply") {
        multiply(leftOperand, rightOperand);
    } else if (operator.id === "divide") {
        divide(leftOperand, rightOperand);
    }
}

// addition function
const add = (a, b) => {
    return a + b;
}

// subtraction function
const subtract = (a, b) => {
    return a-b;
}

//  multiplication function
const multiply = (a, b) => {
    return a * b;
}

// division function
const divide = (a, b) => {
    return a / b;
}