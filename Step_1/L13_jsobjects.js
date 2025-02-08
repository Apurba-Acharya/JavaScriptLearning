let person={
    firstname: "John",
    lastname: "Kenedy",
    age: 50,
    weight: 60
}
//Accessing Object Properties >>>
//console.log(person["firstname"]);
// Or,
console.log(person.age);

console.log ("******** **********");

//Add new property to the existing object:
person ["height"] = 5.5;
//or,
//person.height = 5.5;
console.log(person ["height"]); // or > console.log(person.height);

console.log ("******** **********");

//Update existing property
person ["weight"]= 65;
// Or, person.weight = 65;
console.log(person ["weight"]); 

console.log ("******** **********");

//Remove the property from the object
delete person ["age"];
console.log(person["age"]); //undefned

console.log ("******** looping object **********");
//for/in loop for reading property statements 
for (let x in person){
    // console.log(x); //prints only property names
    // console.log(person[x]); ////prints only values of property
    console.log(x+ ": "+person[x]);
}


