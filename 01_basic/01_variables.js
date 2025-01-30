const accountId = 12
let accountEmail = "keshri89@gmail.com"
var accountPassword = "12345"
accountCity = "Patna" /*don't use this type of variable.*/
let accountState; /*when we declare any varible in js without giving the value and print the variable the output will show undefined */

// accountId = 2 when we declare any variable with const keyword. it will not allow.

accountEmail = "hjfbjf"
accountPassword = "667"
accountCity = "delhi"
console.log(accountId);

/* 
Perfer not to use var
because  of issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
