// Higher order function

// Print example

// Js native functions (map, reduce, filter)

// Functional
const users = [
    {
        name: "Anna",
        age: 15
    },
    {
        name: "Alex",
        age: 25
    },
    {
        name: "Sandra",
        age: 19
    },
    {
        name: "Pau",
        age: 50
    }
];

const users2 = users.map(user => ({ ...user, age: user.age * 2 }));

const ages = users.reduce((acc, user) => {
    return acc + user.age;
}, 0);

console.log(users2);
console.log(ages);
