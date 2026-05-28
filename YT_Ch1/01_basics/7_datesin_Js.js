let myDate = new Date();

console.log("1: " + (myDate.toString()));
console.log("2: " + (myDate.toDateString()));
console.log("3: " + (myDate.toISOString()));
console.log("4: " + (myDate.toJSON()));
console.log("5: " + (myDate.toLocaleDateString()));
console.log("6: " + (myDate.toLocaleTimeString()));

console.log("7: " + (typeof myDate));

let myCreatedDate = new Date(2023, 0, 23); // Months start from 0
console.log("8: " + (myCreatedDate.toDateString()));

let CreatedDate = new Date(2023, 0, 23, 5, 3);
console.log("9: " + (CreatedDate.toLocaleString()));

let CreatDate = new Date("2023-01-14");
console.log("10: " + (CreatDate.toLocaleString()));

let CreDate = new Date("12-30-2023");
console.log("11: " + (CreDate.toLocaleString()));

let myTimeStamp = Date.now();
console.log("12: " + (myTimeStamp));

console.log("13: " + (CreDate.getTime()));

console.log("14: " + (Math.floor(Date.now() / 1000))); // Convert to seconds

let newDate = new Date();

console.log("15: " + (newDate.getMonth() + 1));

console.log("16: " + (newDate.getDay()));

console.log("17: " +
    (
        newDate.toLocaleString('default', {
            weekday: "long"
        })
    )
);