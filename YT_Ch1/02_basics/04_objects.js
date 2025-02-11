//const tinderUser = new Object() //singleton object
//or:
const tinderUser = {}; //non singeton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitest",
            lastname: "choudhary"
        }
    }
}

//console.log (regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

//const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj5 = {...obj1, ...obj2}
//console.log(obj4);
//console.log(obj5);

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
]
//console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); //Not imp.
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Not imp.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "hitesh"
}

//Destructuring of object: 
const {courseInstructure: instructor} = course
console.log(instructor);

// //JSON:
// {
//     "name": "hitesh",
//     "coursename": "js is hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
