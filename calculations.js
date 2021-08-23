const calculatorOutput = document.querySelector(".calculator__output");
const clearButton = document.querySelector(".clear_button");
const deleteButton = document.querySelector(".delete_button");
const digits = document.querySelectorAll(".digit");
const allOperators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals-button");

// storage variables
let leftOperand = 0;
let rightOperand = 0;
let operator;
let result = 0;

// display when buttons are pressed
const pressButton = (number) => {
    if (calculatorOutput.innerHTML == 0) {
        calculatorOutput.innerHTML = number;
    } else {
        calculatorOutput.innerHTML += number;
    }
}
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        pressButton(digit.innerHTML);
    })
})

// operator function
const pressOperator = (action) => {
    leftOperand = calculatorOutput.innerHTML;
    switch (action) {
        case "add": operator = "add";
        calculatorOutput.innerHTML = 0;
        break;
        case "subtract": operator = "subtract";
        calculatorOutput.innerHTML = 0;
        break;
        case "multiply": operator = "multiply";
        calculatorOutput.innerHTML = 0;
        break;
        case "divide": operator = "divide";
        calculatorOutput.innerHTML = 0;
        break;
    }
}
allOperators.forEach((clickedOperator) => {
    clickedOperator.addEventListener("click", () => {
        pressOperator(clickedOperator.id);
    })
})


// result function
const resultFn = (leftOperand, rightOperand, operator) => {
    rightOperand = calculatorOutput.innerHTML;
    let sum = 0;
    switch (operator) {
        case "add": sum = add(leftOperand,rightOperand);
        result = sum;
        break;
        case "subtract": sum = subtract(leftOperand, rightOperand);
        result = sum;
        break;
        case "multiply": sum = multiply(leftOperand, rightOperand);
        result = sum;
        break;
        case "divide": sum = divide(leftOperand, rightOperand);
        result = sum;
        break;
    }
    calculatorOutput.innerHTML = result;
}
equalsButton.addEventListener("click", () => {
    resultFn(leftOperand, rightOperand, operator)
});

// addition function
const add = (a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
}

// subtraction function
const subtract = (a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);
    return a - b;
}

//  multiplication function
const multiply = (a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);
    return a * b;
}

// division function
const divide = (a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);
    return a / b;
}

// clear function
const clearOutput = () => {
    calculatorOutput.innerHTML = 0;
    leftOperand = 0;
    rightOperand = 0;
}
clearButton.addEventListener("click", clearOutput);

// delete function
// CAN IMPROVE
const deleteDigit = () => {
    if(calculatorOutput.innerHTML != 0) {
        // slice(0, -1) will remove last digit
        calculatorOutput.innerHTML = calculatorOutput.innerHTML.slice(0, -1);
    }
}
deleteButton.addEventListener("click", deleteDigit);