let display = document.getElementById('display')
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function clearLast() {
    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
}

function calculateResult () {
    try {
        expression = eval(expression);
        display.value = expression;

    }catch (error) {
        display.value = 'error'
    }
}