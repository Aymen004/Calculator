# JavaScript Calculator

This is a simple calculator application implemented in JavaScript.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear the current input.
- Display the result of the calculation.

## How to Run

1. Clone this repository.
2. Open `index.html` in your browser.

## Code Overview

The application is contained in a single JavaScript file, `script.js`. Here's a brief overview of what each part of the code does:

- `display` is a DOM element that displays the current input or the result of the calculation.
- `currentInput` is a string that stores the current input.
- `calculator` is an object that contains methods for manipulating the current input and performing calculations.
- The `appendToDisplay` method appends a value to the current input and updates the display.
- The `clearDisplay` method clears the current input and resets the display to '0'.
- The `calculate` method evaluates the current input as a JavaScript expression and updates the display with the result. If the expression is invalid, it displays 'Error'.
- The `appendDigit` and `appendOperator` methods append a digit or an operator to the current input, respectively.
- The `appendDigitOrOperator` method appends a digit or an operator to the current input, depending on the value.
- The event listener at the end of the file handles clicks on the calculator buttons. It calls the appropriate method of the `calculator` object based on the text content of the clicked button.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

