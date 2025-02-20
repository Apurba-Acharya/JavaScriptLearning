// String is a pre defined object in javaScript :

let s= "welcome";
// or, let s = new String ();

//charAt() :
console.log ("charAt() : ", s.charAt(3)); //c

//concat(): 
console.log ("concat(): ", s.concat (" to javascript programming"));
console.log ("concat(): ", s.concat (" to javascript programming").concat (" 2025"));

//replace(): 
s = "welcome to javascript";
console.log ("replace(): ", s.replace ("javascript", "Python"));

//substring(): 
s = "welcome";
console.log ("substring(): ", s.substring (0,3)); //Print only: wel
console.log ("substring(): ", s.substring (3,7)); //Print only: come

// ***toLowerCase() & toUpperCase() :
s = "WELcome";
console.log ("toLowerCase(): ", s.toLowerCase()); //welcome
console.log ("toLowerCase(): ", s.toUpperCase()); //WELCOME

// ***split() : 
s = "welcome to javascript";
let arr = (s.split (' '));
console.log("split() : ", arr);
console.log("split() : ", arr[0]);
console.log("split() : ", arr[2]);

// ***trim() :
s =  "      welcome ";
console.log ("withOut trim : ", s);
console.log ("trim() : ", s.trim());

//Numbers :
let x = 100; // Integer // Or, let x = new Number (100);
let y = 102.7; //decimal
let z = 10e2; //exponential value
console.log("Numbers : ", x,y,z);

// Types of methods in numbers :
//isInteger() : it will return boolean value
a = 10;
b = 1.8;
c = "x";
console.log ("isInteger() : ", Number.isInteger(a)); 
console.log ("isInteger() : ", Number.isInteger(b)); 
console.log ("isInteger() : ", Number.isInteger(c)); 

//parseInt() : converts a string into number
s="12345";
console.log(typeof(s)); //String
console.log("parseInt() : ", Number.parseInt(s)); // integer

//parsefloat(): converts a string into float
s1="123.567";
console.log(typeof(s1)); //String
console.log("parsefloat(): ", Number.parseFloat(s1)); //float

//toString(): converts a number to string
let n = 1234;
let n1 = 12.3256;
console.log(typeof(n)); //Number
console.log("toString(): ", typeof(Number.toString(n))); //String
console.log("toString(): ", typeof(Number.toString(n1))); //String
