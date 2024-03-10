const accountId = 144553;
let accountEmail = "adesh@google.com";
var accountPassword ="12345";
accountCity = "Jaipur";
let accountState;
// accountId = 2 ; not allowed


accountEmail = "a@g.com";
accountPassword = "54321";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and fuctional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);