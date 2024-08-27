// Javascript arrays are resizable; 
// mix of datatypes
// Javascript array- copy operation creates swallow copies

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Saktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array Methods

myArr.push(6)
myArr.push(7)  //add the value to the last of the array
myArr.pop()  //removes the last value of the array

myArr.unshift(9) //to insert the value at the start of the array
myArr.shift() //it removes the first element from the Array

console.log(myArr.includes(9));  //checks whether the given value is present in the array or not
console.log(myArr.indexOf(2)); //checks the position of the value in the array

const newArr = myArr.join()  //this returns the array into the string with separated commas

console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);






