function sayMyName() {
    console.log("1: " + ("H"));
    console.log("2: " + ("I"));
    console.log("3: " + ("T"));
    console.log("4: " + ("E"));
    console.log("5: " + ("S"));
    console.log("6: " + ("H"));
}
sayMyName(); // to print stored data

function addTwoNumbers1(number1, number2) { // Parameters
    console.log("7: " + (number1 + number2));
}
const result1 = addTwoNumbers1(3, 5);
console.log("8: " + (result1)); // undefined

function addTwoNumbers2(number1, number2) { // Parameters
    let result = number1 + number2;
    return result;
}
const result2 = addTwoNumbers2(3, 5);
console.log("9: " + (result2));

function addTwoNumbers3(number1, number2) { // Parameters
    return number1 + number2;
}
const result3 = addTwoNumbers3(3, 5);
console.log("10: " + (result3));

function loginUserMessage(username='sam') {
    if (!username) {
        console.log("11: " + ("Please Enter a username"));
        return;
    }
    return `${username} just logged in`;
}
console.log("12: " + (loginUserMessage("hitesh")));
console.log("13: " + (loginUserMessage()));

function calculateCartPrice(...num1) { // Rest Operator= Collects all arguments into a single array.
    return num1;
}
console.log("14: " + (calculateCartPrice(200, 300, 400, 200)));

function CalculateCartPrice(val1, val2, ...num2) { // The rest parameter must always be the last parameter: ❌ function demo(...rest, a, b) {}
    return num2;
}
console.log("15: " + (CalculateCartPrice(200, 300, 400, 900)));

const user = {
    username: "Hitesh",
    price: 199
};
function handleObject(anyObject) { //  Username is Hitesh and price is 199
    console.log("16: " + (`Username is ${anyObject.username} and price is ${anyObject.price}`));
}
handleObject(user);
handleObject({ // Username is Sam and price is 399
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[2];
}
console.log("17: " + (returnSecondValue(myNewArray)));
console.log("18: " + (returnSecondValue([700, 500, 1100, 300])));