console.log( 2 > 1); //true
console.log( 2 >= 1); //true
console.log( 2 == 1); //false
console.log( 2 < 1);  //false
console.log( 2 != 1);  //true

/**************************************************************************************************** */

console.log( "2" > 1);  //true
console.log( "02" > 1); //true

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true
//The reson is that an equality check == and comparison > <>= <= works differently.
//comparison converts null to a number, treating it as 0.
//That'swhy (3) null >= 0 is true and (1)  null > 0 is false.                   

/********************************************************* */
console.log(undefined == 0);  //false
console.log(undefined < 0);  //false
console.log(undefined > 0);  //false
//we mostly avoid these type of conversions


// === => It strictly checks the number and its data type also 

console.log("2" === 2);  //false



