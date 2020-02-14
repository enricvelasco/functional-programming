import { add, multiply, multiplyBy2, divide } from "./curry";

function compose(...fns) {
    return function(num) {
        return fns.reduce((num, fn) => fn(num), num);
    };
}

const addTwoTripleHalp = compose(
    add(2), // 7
    multiply(10), // 70
    divide(2), // 35
    multiplyBy2 // 70
);

console.log(addTwoTripleHalp(5));
