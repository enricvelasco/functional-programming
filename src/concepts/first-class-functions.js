// First class functions

function sum(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}

const makeOperation = (operation, ...values) => operation(...values);

const result = makeOperation(multiply, 2, 5, 10);

console.log(result);
