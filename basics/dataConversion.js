let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33 => 33" easily converted
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "akash" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)




// **********************Operations***************************//

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

//**************************************************8 */

let str1 = "hello"
let str2 = " Akash"  

let str3 = str1 + str2
console.log(str3);     //hello Akash

//********************************************** */
                     
console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" +2 + 2);  //122
console.log(1 + 2 + "2");  //32

console.log( 3+ 4* 5 %3);  //5

console.log(+true);  //not recommended //1
console.log(+"");   //0

// **************************************************//

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; 
gameCounter++;
console.log(gameCounter);
