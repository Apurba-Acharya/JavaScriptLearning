const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); //from integer to string the getting length of string
console.log(balance.toFixed(2));

const otherNumber =123.8936;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++Maths++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 5, 6, 2));
console.log(Math.max(4, 5, 6, 2));

console.log(Math.random()); //always valuse should display within 0 to 1
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);








