//OBJECTS :

let person={        // person = object
    firstname: "John",  // Key : Property | Value : value of Property
    lastname: "Kenedy",
    age: 50,
    weight: 60
}
// //Accessing Object Properties >>>
// console.log(person["firstname"]);
// // Or,
// console.log(person.age);

// //Add new property to the existing person object :
// //person ["height"] = 5.5;
// //or,
// person.height = 5.5;
// console.log(person.height);

// //Update existing property :
// //person ["weight"]= 65;
// // Or, 
// person.weight = 65;
// console.log(person.weight); 

// //Remove the property from the object :
// delete person.age;
// console.log(person.age); //undefned


//for-in loop for reading property statements :

for (let x in person){
    console.log(x); //printing only property names
}

for (let y in person){
    console.log(person[y]); //printing only values of property
}

for(let z in person){
    console.log(z+ " : " +person[z]); // printing key value pair
}


