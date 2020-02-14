// Pure functions
const sum = (num1, num2) => num1 + num2;

console.log(sum(1, 2));

/// Pure functions
const impureSum = (num1, num2) => {
    console.log(num1 + num2);
};

impureSum(2, 5);

// Exmaple using outter fn (impure/pure)

// Always return something
// Avoid Side effects
// Referential transparency
