var obj = {
    name: "a",
    email: "a@example.com",
    age: 20
}

for(let key in obj){
    console.log(key);
}

for(let key of Object.keys(obj)){ // Can iterate using: Object.keys(obj)||Object.values(obj)||Object.entries(obj)
    console.log(key);
}