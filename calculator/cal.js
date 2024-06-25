const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = null;

function updateDisplay(value) {
    display.innerText = value;
}

function handleInput(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        if (currentInput.includes('.') && value === '.') return; // Prevent multiple dots
        currentInput += value;
        updateDisplay(currentInput);
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (operator) {
            // Evaluate the existing operation before starting a new one
            previousInput = `${calculate(previousInput, currentInput, operator)}`;
            currentInput = '';
        } else {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = value;
        updateDisplay(previousInput + operator);
    }
}

function handleEquals() {
    if (operator && currentInput !== '') {
        currentInput = `${calculate(previousInput, currentInput, operator)}`;
        previousInput = '';
        operator = null;
        updateDisplay(currentInput);
    }
}

function calculate(first, second, operator) {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            return secondNum;
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { value } = button.dataset;
        if (value) {
            handleInput(value);
        } else if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            handleEquals();
        }
    });
});

updateDisplay('0');
