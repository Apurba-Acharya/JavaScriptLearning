// Premitive:
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Example:
const score = 100; // Number
const scoreValue = 100.3; // Number

const IsLoggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol ('123')
console.log(id == anotherId);
const bignumber = 842025342632410632n;




//Reference Type (Non Premitive): 
//Array, Objects, Functions

//Arrays:
const heros = ["Shaktiman", "naagraj", "doga"];

//Objects:
let myObj = {
    name: "hitesh",
    age: 22,
}

//Functions:
const myFun = function(){
    console.log("Hello world !");
}

console.log(typeof IsLoggedIn);
console.log(typeof outsideTemp);

// Link: https://262.ecma-international.org/5.1/#sec-11.4.3
