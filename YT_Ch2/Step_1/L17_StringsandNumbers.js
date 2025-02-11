let s= "welcome";

// let s = new String ();

//charAt()
console.log (s.charAt(3)); //l

//concat()
console.log (s.concat (" to javascript programming"));
console.log (s.concat (" to javascript programming").concat (" 2025"));

//replace();
s = "welcome to javascript";
console.log (s.replace ("javascript", "Python"));

//substring()
s = "welcome";
console.log (s.substring (0,3)); //Print only: wel
console.log (s.substring (3,7)); //Print only: come

//toLowerCase() & toUpperCase()
s = "WELcome";
console.log (s.toLowerCase()); //welcome
console.log (s.toUpperCase()); //WELCOME

//split()
s = "welcome to javascript";
let arr = (s.split (' '));
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

//trim()
s =  "      welcome ";
console.log (s);
console.log (s.trim());

//********Numbers  >>>
//let x = 100; // Or, let x = new Number (100);

let x = 102; // Integer
let y = 102.7; //decimal
let z = 10e2; //exponential value
console.log(x,y,z);

// Types of methods in numbers >>>

//isInteger() >> it will return boolean value
x = 10;
y = 1.8;
z = "x";
console.log (Number.isInteger(x)); 
console.log (Number.isInteger(y)); 
console.log (Number.isInteger(z)); 

//parseInt() - converts a string into number
s="12345";
console.log(typeof(s)); //String
console.log(Number.parseInt(s)); // integer

//parsefloat()
s1="123.567";
console.log(typeof(s1)); //String
console.log(Number.parseFloat(s1)); //float

//toString(): converts a number to string
let n = 1234;
let n1 = 12.3256;
console.log(typeof(n)); //Number
console.log(typeof(Number.toString(n))); //String
console.log(typeof(Number.toString(n1))); //String


