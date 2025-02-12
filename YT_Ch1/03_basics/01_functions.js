
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName(); //to print stored data

// function addTwoNumbers (numbers1, numbers2){ //(numbers1, numbers2): Parameters
//     console.log(numbers1 + numbers2);
// }
// const result = addTwoNumbers(3, 5); //(3, null): arguments
// console.log("Result: ", result); //undefined

// function addTwoNumbers (numbers1, numbers2){ //(numbers1, numbers2): Parameters
//     let result = numbers1 + numbers2;
//     return result;
// }
// const result = addTwoNumbers(3, 5); //(3, null): arguments
// console.log("Result: ", result); 

function addTwoNumbers (numbers1, numbers2){ //(numbers1, numbers2): Parameters
    return numbers1 + numbers2;
}
const result = addTwoNumbers(3, 5); //(3, null): arguments
//console.log("Result: ", result); 

function loginuserMessage(username = "sam"){
    if(!username){  //username === undefined
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginuserMessage("hitesh"));
//console.log(loginuserMessage());

function calculateCartPrice(...num1){ // ... : Rest Operator
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 200));

function CalculateCartPrice(val1, val2, ...num2){ // ... : Rest Operator
    return num2;
}
//console.log(CalculateCartPrice(200, 300, 400, 900));

const user = {
    username: "Hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject ({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([700, 500, 1100, 300]));

