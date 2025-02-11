const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myarr2 = new Array(1, 2, 3);
// console.log(myArr[1]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9) // to add an element before 1st element of the existing array
// myArr.shift() // to remove the 1st element in the array

// console.log(myArr.includes(9)); //boolean
// console.log(myArr.indexOf(3)); //If the mentioned index is not exists then in console it should display -1.

// const newArr = myArr.join(); //Can convert an array to string

// console.log(myArr);
// console.log(typeof newArr);


//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);

