//singleton
//Object.create

//object literals

const mySym = Symbol("key1") //Interview

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

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "h@chatgpt.com";
//Object.freeze(JsUser); //To lock the changes in object
JsUser.email = "h321@chatgpt.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());