let display = document.getElementById('display');
let currentInput = '';

let calculator = {
    appendToDisplay: function(value) {
        currentInput += value;
        display.textContent = currentInput;
    },

    clearDisplay: function() {
        currentInput = '';
        display.textContent = '0';
    },

    calculate: function() {
        try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch (error) {
            display.textContent = 'Error';
        }
    },

    appendDigit: function(digit) {
        this.appendToDisplay(digit);
    },

    appendOperator: function(operator) {
        if (currentInput !== '' && '+-*/'.includes(currentInput[currentInput.length - 1])) {
            currentInput = currentInput.slice(0, -1) + operator;
        } else {
            this.appendToDisplay(operator);
        }
    },

    appendDigitOrOperator: function(value) {
        if ('+-*/'.includes(value)) {
            this.appendOperator(value);
        } else {
            this.appendDigit(value);
        }
    }
}

document.querySelector('.calculator').addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('btn')) {
        if (target.textContent === 'C') {
            calculator.clearDisplay();
        } else if (target.classList.contains('equal')) {
            calculator.calculate();
        } else {
            calculator.appendDigitOrOperator(target.textContent);
        }
    }
}, { capture: true });