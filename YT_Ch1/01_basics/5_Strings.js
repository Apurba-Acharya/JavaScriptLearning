const name = "hitsh";
const repoCount = 50;
//console.log (name  + repoCount + " value");

console.log(`Hello my name is ${name} and my report count is ${repoCount}`);

const gameName  = new String ('hitesh-FC');
console.log (gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5); //characters will be print from 0th to 4th
console.log(newString);

const anotherString  = gameName.slice(-7,4); //Negative we can use
console.log(anotherString);

const newStringOne  = "    hitest....    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/dfg%20";
console.log(url.replace('%20','-'));

console.log(url.includes('.co'));

console.log(gameName.split("-"));

