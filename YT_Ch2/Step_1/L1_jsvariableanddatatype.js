// ********** variable *************

// //*********** var variable ***********:
// //*multiple line :
// var x4; //declarization
// x4=10; //initialization

// //*single statement >> declaration+initialization :
// var x5 = 10;

// //*single statement >> multiple variable :
// var x6=100, y1=200;

// //*print :
// document.write(x6); //To print the value in web page
// console.log(x6); //To print the value in inspect >> console
//console.log ("Print output in VS code TERMINAL: node L1_jsvariableanddatatype.js");


// //******** let variable *********
// let x3; //declarization
// x3= "welcome"; //initialization
// console.log(x3)

// //*single statement >> declaration+initialization :
// let y2 = "welcome"; 
// console.log(y2);

// //multiple veriable in single line
// let z = "welcome", a= 100;
// console.log(z);
// console.log(a);


// //******* difference between var and let keyword *******
// //var is function scoped :
// console.log(x2); // Output : undefined
// var x2= 100;
// console.log(x2) //100

// //let is block scoped :
// console.log(y3); // Output : error
// let y3= 100;
// console.log(y3) // this line will not execute due to error in line no. 42

// //******* const keyword ****
// const x1 = 100.256;
// console.log("x1 value before change =", x1);
// x1=500; //incorrect because x1 is constant
// console.log(x1); //error

// //****** data types *********
// let qty = 100;
// console.log (typeof(qty)); //number type

// let price = 100.552;
// console.log (typeof(price)); //number type

// let stuname = "John";
// console.log (typeof(stuname)); //string

// let flag = true;
// console.log (typeof(flag)); //boolean

// let ststus = null;
// console.log (typeof(null)); //object

// let value;
// console.log (typeof(value)); //undefined
// let value1 = undefined;
// console.log (typeof(value1)); //undefined
