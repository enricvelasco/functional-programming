const curry = (fn, ...params) => {
    const hasAllParams = params.length === fn.length;
    return hasAllParams ? fn(...params) : curry.bind(null, fn, ...params);
};

export const add = curry((num, num2) => num + num2);
export const multiply = curry((num, num2) => num * num2);
export const divide = curry((num, num2) => num2 / num);

export const multiplyBy2 = multiply(2);

console.log(multiplyBy2(5));

const addTwo = add(3, 2);
console.log(addTwo);

// Partial application
function addition(x, y) {
    return x + y;
}
const plus5 = addition.bind(null, 5);
console.log(plus5(10)); // output -> 15
