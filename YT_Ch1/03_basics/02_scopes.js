// let a = 300;

// if(true){
//     let a  = 10;
//     const b  = 20;
//     console.log("INNER: ", a); // block scope
// }

// console.log(a); // Global scope
// //console.log(b);


// //Nested scope:
// function one(){
//     const username = "hitesh"

//     function two (){
//         const website = "Youtube"
//         console.log(username);
//     }
//     //console.log(website);

//     two() 
// }
// one()

// if (true){
//     const username = "apurba"
//     if (username === "apurba") {
//         const website = " youtube"
//         console.log(username + website);   
//     }
//     //console.log(website); // trying to access website outside of inner for loop
    
// }
// //console.log(username); // trying to access website outside of outer for loop


//+++++++++++++++++++++ Interesting Concept +++++++++++++++++++

console.log(addone (5)); // this is correct
function addone (num){
    return num + 1
}

addTwo (5); //Trying to access a function before its declearation: Not possible in this format
const addTwo = function (num){ 
    return num + 2
}








