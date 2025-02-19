// //variable

// //*********** var variable ***********:

// //*multiple line :
// var x; //declarization
// x=10; //initialization

// //*single statement >> declaration+initialization :
// var x = 10;

// //*single statement >> multiple variable :
// var x=100,y=200;

// //*print :
// document.write(x); //To print the value in web page
// console.log(x); //To print the value in inspect >> console


//******** let variable *********

let x; //declarization
x= "welcome"; //initialization
console.log(x)

//*single statement >> declaration+initialization :
let y = "welcome"; 
console.log(y);

//multiple veriable in single line
let z = "welcome", a= "javascript";
console.log(z);
console.log(a);

var m = "welcome", b= "javascript";
console.log(m);
console.log(b);

//***** difference between var and let *******/
/* console.log(x);
var x= 100;
console.log(x)

console.log(y);
let y= 100;
console.log(y) */

/*******const veriable ****/
/* const x = 100.256;
console.log(x);
x=500; //incorrect because x is constant
console.log(x); */

/****** data types *********/
let x = 100;
console.log (typeof(x)); //number type
let price = 100.552;
console.log (typeof(price)); //number type
let stuname = "John";
console.log (typeof(stuname)); //string
let flag = true;
console.log (typeof(flag)); //boolean
let ststus = null;
console.log (typeof(null)); //object
let value;
console.log (typeof(value)); //undefined