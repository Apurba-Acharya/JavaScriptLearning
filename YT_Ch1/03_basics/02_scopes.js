let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("1: " + (a)); // block scope
    console.log("2: " + (b)); // block scope
}

console.log("3: " + (a)); // Global scope

// Nested scope
function one() {
    const username = "hitesh";
    function two() {
        const website = "Youtube";
        console.log("4: " + (username));
        console.log("5: " + (website));
    }
    two();
}
one();

if (true) {
    const username = "apurba";
    if (username === "apurba") {
        const website = " youtube";
        console.log("6: " + (username + website));
    }
}

// +++++++++++++++++++++ Interesting Concept +++++++++++++++++++

// Function Declaration (Hoisting works)
console.log("7: " + (addone(5)));
function addone(num) {
    return num + 1;
}

// Function Expression (Call after declaration)
const addTwo = function (num) {
    return num + 2;
};
console.log("8: " + (addTwo(5)));