let myDate  = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);
let myCreatedDate = new Date(2023, 0, 23); //Months always start from 0.
console.log(myCreatedDate.toDateString());

let CreatedDate = new Date (2023, 0, 23, 5, 3);
console.log(CreatedDate.toLocaleString());

let CreatDate = new Date ("2023-01-14");
console.log(CreatDate.toLocaleString());

let CreDate = new Date ("12-30-2023");
console.log(CreDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(CreDate.getTime());

console.log(Math.floor (Date.now()/1000)); //Convert to seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
});



