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

// Imperative
const allowedUsersImperative = [];

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        allowedUsersImperative.push(users[i]);
    }
}

const allowedUsers = users.filter(user => {
    return user.age >= 18; // true / false
});

console.log(allowedUsers);

console.log(allowedUsersImperative);
