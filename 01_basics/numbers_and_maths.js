const score = 400
console.log(score);           //400

const balance = new Number(100)     //[Number: 100]
console.log(balance);


console.log(balance.toString());         //"100"
console.log(balance.toString().length);      // 3
console.log(balance.toFixed(2));    //100.00


const otherNumber = 123.655
console.log(otherNumber.toPrecision(3));           //124

const hundreds = 1000000
console.log(hundreds.toLocaleString('EN-in'));     //10,00,000

/******************************* MATHS **********************************************/

console.log(Math);    //Object [Math] {}
console.log(Math.abs(-4));  // 4 ......It returns the negative value to positive
console.log(Math.round(4.6));  //5......round off to the nearest value
console.log(Math.ceil(4.2));   //5......round off to the high value
console.log(Math.floor(4.9));  //4......round off to the lowest value
console.log(Math.min(3,8,45,14,12,14,78));  //3.........returns the minimum value
console.log(Math.max(3,8,45,14,12,14,78));  //78.........returns the maximum value

console.log(Math.random());    //it returns the random value,generally from 0 to 1
console.log((Math.random() * 10) + 1);   //it will not return 0
console.log(Math.floor(Math.random() * 10) + 1);  

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))  //this will return the random number from 10 to 20 range only

