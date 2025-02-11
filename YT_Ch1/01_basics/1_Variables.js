const accountId = 144553;
let accountemail = "abc@gmail.com";
var accountPasword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // Not possible due to const keyword
// console.log(accountId);

accountemail = "Hc@hc.com";
accountPasword = "21212";
accountCity = "Bengaluru";
console.table ([accountId,accountemail,accountPasword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

