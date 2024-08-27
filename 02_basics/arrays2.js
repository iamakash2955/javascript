const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
  //But this is not a good practice to fetch the value in the array or array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
  //Another way to merge two array: concatenation

const allNew_heros = [...marvel_heros, ...dc_heros]
console.log(allNew_heros);
  //Another way to merge two array: Spread method

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6 ,7, [4, 5]]]

const real_another_array = another_arr.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));  //Creates an array from an iterable object.
console.log(Array.from({name : "Akash"}));   //interview questions

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.

