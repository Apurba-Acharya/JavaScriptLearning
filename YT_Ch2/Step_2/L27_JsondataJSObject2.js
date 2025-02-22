let data = {
  "name": "John Doe",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postalCode": 10001
  },
  "hobbies": [
    { "type": "reading", "number": "111-111-111" },
    { "type": "fax", "number": "222-111-333" }
  ]
};

let obj = JSON.parse(data);

console.log(obj.address.street);
//console.log(obj["address"].street);

console.log(obj.name);
//console.log(obj["name"]);
