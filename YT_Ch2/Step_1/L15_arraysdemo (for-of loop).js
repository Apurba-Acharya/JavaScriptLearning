//ARRAYS : An array is a special variable which can hold multiple values in a single variable

let cars = ["saab", "volvo", "BMW"];

// //Or, let cars = new Array ("saab", "volvo", "BMW");
// console.log(cars);
// console.log(cars[2]); //accessing element

// //update array value :
// cars[0] ="Opel";
// console.log(cars);

// //we can have variables of different types in the same array :
// let myarray = [100, "welcome", 10.15, true];
// console.log(myarray);

//we can have objects in an Array :
let person1 ={
    name:"john",
    age:30
};
let person2 ={
    name: "David",
    age: 40
};

// let myarray1 = [person1,person2];
// console.log(myarray1);
// console.log(myarray1[0]);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log (fruits.length);

// //looping elements from array :
// for (let i=0; i<=fruits.length-1; i++){
//  //console.log (fruits[i]);
//  process.stdout.write(fruits[i] + " ");
// }

// // looping elements from array using for-of loop : 
// // ***for-of loop for reading property statements : it can iterates over values of an arrays, strings, maps, sets. 
// // ***for-of and for-in both can accessable in array.
// for(ele of fruits){
//     console.log(ele);
// }

// // Recognize an array - typeof :
// console.log(typeof fruits);

// // To check array or not :
// console.log (Array.isArray(fruits));