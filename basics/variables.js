const accountId = 12345
let accountEmail = "akash@google.com"
var accountPassword = "54321"
accountCity ="Delhi"
let accountState

/*
Prefer not to use var because of the issue in block scope and functional scope
*/

// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)


// accountId = 23425    //assignement is not allowed in const variable

//assigning the existing value
accountEmail = "anish@gmail.com"
accountPassword = "785445"
accountCity ="Patna"

console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])      //console.table is used to run all the variables at the same time and it will return the vale in the format of table

