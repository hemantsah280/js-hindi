const accountId=144453 // it is unchangeable
let accountEmail="Hemant@google.com"
var  password="1122233"
accountCity="Gwalior"
let accountState;

// accountId=2;
/*
Note :- Prefer not to use var
because of the issue in block scope and Functional scope  
*/
accountEmail="hs@hs.com"
password="12344500"
accountCity="Bhopal";
console.log(accountId);
console.log(accountEmail);
console.log(password);
console.table([accountId, accountEmail, password, accountCity, accountState]);
