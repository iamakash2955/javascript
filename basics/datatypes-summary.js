/* Primitive Datatypes (Call by Value)

7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

Non primitive Datatypes (Reference)
Arrays, Objects, Functions

*/

const score = 100   //Number
const scoreValue = 100.3  //Number

const isLoggedIn = false  ///boolean
const outsideTemp = null  //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //symbol

console.log(id === anotherId);  //false

const bigNumber = 989849859856859859859265n  //bigint

/************************************** */

const heros = ["shaktiman", "naagraaj", "doga"]  //object

let myObj = {
    name: "Akash",
    age: 22,           //object
}


const myFunction = function(){
    console.log("Hello world");    //Functions
}

console.log(typeof scoreValue);






