//extract date and time from date object :
let d = new Date();

console.log(d);

//print date/month/year :
console.log (d.getDate()); //1-31
console.log (d.getMonth()+1); //0 -11
console.log (d.getFullYear());  //returns the current year
console.log (d.getDate() + "/" + d.getMonth()+1 + "/" +d.getFullYear());

//print time :
console.log (d.getHours()); //0=23
console.log (d.getMinutes()); //0-59
console.log (d.getSeconds()); //0-59
console.log (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); //returns the current time