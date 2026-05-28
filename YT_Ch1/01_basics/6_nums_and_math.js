const score = 400;
console.log("1: " + score);

const balance = new Number(100);
console.log("2: " + balance);

console.log("3: " + (balance.toString().length)); //from integer to string then getting length of string
console.log("4: " + (balance.toFixed(2)));

const otherNumber =123.8936;
console.log("5: " + (otherNumber.toPrecision(4)));

const hundreds = 1000000;
console.log("6: " + (hundreds.toLocaleString('en-IN')));

//+++++++++++++++Maths++++++++++++++++++++

console.log("7: " + (Math.abs(-4)));
console.log("8: " + (Math.round(4.5)));
console.log("9: " + (Math.ceil(4.2)));
console.log("10: " + (Math.floor(4.9)));
console.log("11: " + (Math.min(4, 5, 6, 2)));
console.log("12: " + (Math.max(4, 5, 6, 2)));

console.log("14: " + (Math.random())); //always values should display within 0 to 1
console.log("15: " + ((Math.random()*10) + 1));

const min = 10;
const max = 20;
console.log("16: " + (Math.floor(Math.random() * (max-min+1)) + min));