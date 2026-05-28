// Data Yype: https://262.ecma-international.org/5.1/#sec-11.4.3

// Premitive: 7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt
// Primitive types (number, string, boolean, etc.) are copied by value.

//Example:
const score = 100; // Number
const scoreValue = 100.3; // Number

const IsLoggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol ('123')
console.log("1: " + (id == anotherId));
const bignumber = 842025342632410632n;

console.log("*********************************************************");

// Reference Type (Non Premitive): Array, Objects, Functions
// Reference Type are copied by reference.

//Arrays:
const heros = ["Shaktiman", "naagraj", "doga"];

//Objects:
let myObj = {
    name: "hitesh",
    age: 22,
}

//Functions:
const myFun = function(){
    console.log("2: " + "Hello world !");
}

console.log("3: " + (typeof IsLoggedIn));
console.log("4: " + (typeof outsideTemp));

console.log("*********************************************************");

// Memories: 1. Stack (Premtive data type) ; 2. Heap (nonPremtive data type)

//Heap example:
let myYoutubename  = "hchoudharydot";

let anothername = myYoutubename;
anothername = "chaiCode";

console.log("5: " + anothername);
console.log("6: " + myYoutubename);


//Stack example:
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "h@google.com"
console.log("7: " + userTwo.email);
console.log("8: " + userOne.email);