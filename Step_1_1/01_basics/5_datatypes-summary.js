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


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memories: 1. Stack (Premtive data type) ; 2. Heap (nonPremtive data type)

//Heap example:
let myYoutubename  = "hchoudharydot";

let anothername = myYoutubename;
anothername = "chaiCode";

console.log(anothername);
console.log(myYoutubename);


//Stack example:
let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "h@google.com"
console.log(userTwo.email);
console.log(userOne.email);
