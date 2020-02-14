const user = {
    name: "Alba",
    children: [],
    age: 15
};

const addSurname = (user, surname) => ({ ...user, surname });

const updatedUser = addSurname(user, "García");

console.log(user);

console.log(updatedUser);

console.log(user === updatedUser);

// Mutable approach?

const addSurnameImpure = user => {
    user.surname = "López";
};

console.log(user);
