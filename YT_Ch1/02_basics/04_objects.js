// const tinderUser = new Object() // singleton object
// or:

const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log("1: " + (JSON.stringify(tinderUser)));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitest",
            lastname: "choudhary"
        }
    }
};

console.log("2: " + (regularUser.fullname.userfullname.firstname));

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj33 = {5: "a", 6: "b"};

// Nested object
const obj3 = {obj1, obj2};

const obj4 = Object.assign({}, obj1, obj2, obj33);

const obj5 = {...obj1, ...obj2};

console.log("3: " + (JSON.stringify(obj4)));

console.log("4: " + (JSON.stringify(obj5)));

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
];

console.log("5: " + (users[1].email));

console.log("6: " + (JSON.stringify(tinderUser)));

console.log("7: " + (Object.keys(tinderUser)));

console.log("8: " + (Object.values(tinderUser)));

// console.log(Object.entries(tinderUser)); // Not important
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Not important

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "hitesh"
};

// Destructuring of object:
const { courseInstructure: instructor } = course;

console.log("9: " + (instructor));

// JSON Example:
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]