let score = "apurba";

console.log("1 : " + typeof score); 
console.log("2 : " + typeof(score));

let valueInNumber = Number(score);
console.log("3 : " + typeof valueInNumber); 
console.log("4 : " + valueInNumber); // "number" -> "NaN" > Because internally JavaScript considers NaN a special numeric value.

//"33" => can esily convert to Number
//"33abc" => NaN = Not a number
//true = 1; false = 0


let isLoggedIn1 = "hitsh";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log("5'1 : " + booleanIsLoggedIn1);

let isLoggedIn2 = "";
console.log("5'2 : " + Boolean(isLoggedIn2));

//1=> true ; 0 => false
//"" => false
//"hitesh" => true


let someNumber = 33;
let stringNumber = String (someNumber);
console.log("6 : " + stringNumber);
console.log("7 : " + typeof stringNumber);

console.log ("********************** Operations *************************");

let value = 3;
let negValue = -value;
console.log("8 : " + negValue);

// console.log(2+2);
// console.log(2**2);
// console.log(2%3);

let str1 = "hello";
let str2 = "JS";
let str3 = str1 + str2;
console.log("9 : " + str3);

console.log("10 : " + ("1" + 2));
console.log("11 : " + (1 + "2"));
console.log("12 : " + ("1" + 2 + 2));
console.log("13 : " + (1 + 2 + "1"));

console.log("14 : " + (+true));
console.log("15 : " + (+""));

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
//PostFix:
console.log("16 : " + (gameCounter++));
//PreFix:
console.log("17 : " + (++gameCounter));