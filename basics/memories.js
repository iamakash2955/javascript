//Two types of memory in javascript
// 1 => Stack - primitive data type uses stack memory; it returns the exact copy
// 2 => Heap - Non - primitive data type uses heap memory; it return the references

let myPersonalName = "Akash Kumar"

let anotherName = myPersonalName
anotherName = "Anish Kumar"

console.log(myPersonalName); //Akash Kumar
console.log(anotherName);   //Anish Kumar

// This will return different value for both as it returns the exxact copy not the real one. (Stack memory)


let userOne = {
    email : "akash@gmail.com",
    upi: "akash@ybl"
}

let userTwo = userOne

userTwo.email = "anish@gmail.com"

console.log(userOne.email); //anish@gmail.com
console.log(userTwo.email); //anish@gmail.com

//This will return the same value as it return the same reference. (Heap memory) 
