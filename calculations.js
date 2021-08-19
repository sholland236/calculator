let calculatorOutput = document.querySelector(".calculator__output");
let display = calculatorOutput.textContent;

// logic for display when buttons are pressed
const pressButton = (number) => {
    if (calculatorOutput.innerHTML == 0) {
        calculatorOutput.innerHTML = number;
    } else {
        calculatorOutput.innerHTML += number;
    }

}

// function addition = (a, b) => {
//     return a + b;
// }