const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myarr2 = new Array(1, 2, 3);

console.log("1: " + (myArr[1]));

// Array methods:
myArr.push(6); // Adds element at the end of array.
console.log("2: " + (myArr));

myArr.push(7);
console.log("3: " + (myArr));

myArr.pop(); // Removes the last element.
console.log("4: " + (myArr));

const myArr3 = [0, 1, 2, 3, 4, 5];

myArr3.unshift(9) // Add element at beginning
myArr3.shift() // Remove first element

console.log("5: " + (myArr3.includes(9))); // boolean

console.log("6: " + (myArr3.indexOf(3))); // If value does not exist, returns -1

const newArr4 = myArr3.join(); // Converts array into string

console.log("7: " + (myArr3));

console.log("8: " + (typeof newArr4));


// slice, splice
const myArr5 = [0, 1, 2, 3, 4, 5];
console.log("9: " + (myArr5));

const myn1 = myArr5.slice(1, 3); // slice(start, end)
console.log("10: " + (myn1));
console.log("11: " + ("B " + myArr5));

const myn2 = myArr5.splice(1, 3);
console.log("12: " + ("C " + myArr5));
console.log("13: " + (myn2));

