const name = "hitsh";
const repoCount = 50;
console.log ("1: " + (name  + repoCount + " value"));

console.log("2: " + (`Hello my name is ${name} and my report count is ${repoCount}`));

const gameName  = new String ('hitesh-FC'); // ---> creates a String object.
console.log ("3: " + gameName[0]); // ---> Strings in JavaScript are array-like, so you can access characters using index positions.

console.log("4: " + gameName.__proto__); // __proto__ points to the object's prototype.

console.log("5: " + gameName.length);
console.log("6: " + gameName.toUpperCase());
console.log("7: " + (gameName.__proto__ === String.prototype));
console.log("8: " + gameName.charAt(6));
console.log("9: " + gameName.indexOf('t'));

const newString = gameName.substring(0,5); //characters will be print from 0th to 4th
console.log("10: " + newString);

const anotherString  = gameName.slice(-7,4); //Negative we can use
console.log("11: " + anotherString);

const newStringOne  = "    hitest....    ";
console.log("12: " + newStringOne);
console.log("13: " + newStringOne.trim());

const url = "https://hitesh.com/dfg%20";
console.log("14: " + (url.replace('%20','-')));

console.log("15: " + (url.includes('.co')));

console.log("16: " + (gameName.split("-")));
