const name = "Akash"
const repoCount = 15

console.log(name + repoCount + " value");

//This method is not recommended as it is the old method.

console.log(`My name is ${name} and my repo count is ${repoCount}`); //readable and reliable, better to previous one and modern; string interpolation

const gameName = new String('iamakash-kumar-sinha')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4) //it will not include the last index
console.log(newString);

const anotherString = gameName.slice(4, 8) //the index value can be negative also
console.log(anotherString);

const newStringOne = "        akash"
console.log(newStringOne);
console.log(newStringOne.trim());          // it will remove the white space from the string

const url = "https://akash.com/akash%20sinha"
console.log(url.replace('%20', '-'))

console.log(url.includes('akash'))

console.log(gameName.split('-'))

/*****************************************************8 */