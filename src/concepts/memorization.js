// Memoizing

// A simple function to add something
const add = n => n + 10;

// a simple memoized function to add something
const memoizedAdd = fn => {
    const cache = {}; // { 9: 19 }
    return n => {
        // 9
        if (n in cache) {
            return cache[n];
        } else {
            const result = fn(n, 10);
            cache[n] = result; // { 9: 19 }
            return result;
        }
    };
};

// returned function from memoizedAdd
const newAdd = memoizedAdd(add);

console.time();
console.log(newAdd(9));
console.timeEnd();

console.time();
console.log(newAdd(9)); // cached
console.timeEnd();
