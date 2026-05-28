// singleton
// Object.create

// object literals

const mySym = Symbol("key1"); // Interview

const JsUser = {
    name: "Hitest",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesth@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log("1: " + (JsUser.email));

console.log("2: " + (JsUser["email"]));

console.log("3: " + (JsUser["full name"]));

console.log("4: " + (JsUser[mySym]));

JsUser.email = "h@chatgpt.com";

// Object.freeze(JsUser); // To lock object changes

JsUser.email = "h321@chatgpt.com";

// console.log("5: " + (JsUser));

JsUser.greeting = function () {
    console.log("6: " + "Hello Js");
};

JsUser.greetingTwo = function () {
    return(`Hello Js, ${this.name}`);
};

console.log("7: " + (JsUser.greeting()));
console.log("8: " + (JsUser.greetingTwo()));