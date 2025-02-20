let fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString () : Can convert an array to comma seperated string value
console.log("toString () : ", fruits.toString() + " ");

//join() : Can seperate value with any kind of special chracter
console.log("join() : ", fruits.join("*"));

//pop() : Remove last element of an array then print the removed element of an array
console.log("pop() : ", fruits.pop()); //Mango
console.log("pop() : ", fruits); //[ 'Banana', 'Orange', 'Apple' ]

//push() : To add a new element at the end of the array
fruits.push("kiwi");
console.log("push() : ", fruits); //[ 'Banana', 'Orange', 'Apple', 'kiwi' ]

//shift() : remove the 1st element of an array then print the removed element of an array
console.log("shift() : ", fruits.shift()); // Banana 
console.log("shift() : ", fruits); // [ 'Orange', 'Apple', 'kiwi' ]

//unshift() : To add a new element at the begining of the array and can print the length of an array
console.log("unshift() : ", fruits.unshift("Lemon")); // 4
console.log("unshift() : ", fruits); // [ 'Lemon', 'Orange', 'Apple', 'kiwi' ]

//Deleting elements from array
delete fruits [1];
console.log("Deleting : ", fruits); //[ 'Lemon', <1 empty item>, 'Apple', 'kiwi' ]

// concat() : join or merging 2 or more array
let arr1 = [10, 20];
let arr2 = ["A", "B", "C"];
console.log("concat() : ", arr1.concat(arr2)); //[ 10, 20, 'A', 'B', 'C' ]
let arr3 = ["x", "y", 15.025, "z"]
console.log("concat() : ", arr1.concat(arr2, arr3));

//slice() : a piece of an array into an new array
fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("slice() : ", fruits1.slice(1)); //[ 'Orange', 'Apple', 'Mango' ]

//sort() : for shorting | important
console.log("sort() : ", fruits1.sort());

