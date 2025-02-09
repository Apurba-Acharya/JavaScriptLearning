let score = "apurba";

console.log(typeof score); 
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber); 

//"33" => can esily convert to Number
//"33abc" => NaN = Not a number
//true = 1; false = 0


let isLoggedIn = "hitsh"; //if let isLoggedIn = "" : false
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=> true ; 0 => false
//"" => false
//"hitesh" => true


let someNumber = 33;
let stringNumber = String (someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

console.log ("********************** Operations *************************");

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2**2);
//console.log(2%3);

let str1 = "hello";
let str2 = "JS";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "1");

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
//PostFix:
console.log(gameCounter++);
//PreFix:
console.log(++gameCounter);