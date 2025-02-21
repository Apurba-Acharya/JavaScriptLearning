data = {
  name: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["reading", "running"],
};

let obj = JSON.parse(data);

console.log(obj.address.street);
console.log(obj["address"].street);

console.log(obj.name);
console.log(obj["name"]);
