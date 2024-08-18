//Dates

let myDate = new Date()
console.log(myDate.toString())  //Sun Aug 18 2024 20:12:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  //Sun Aug 18 2024
console.log(myDate.toISOString())   //2024-08-18T20:12:52.856Z
console.log(myDate.toLocaleDateString())    //8/18/2024
console.log(myDate.toLocaleString())    //8/18/2024, 8:12:52 PM
console.log(typeof myDate);       //object

let myCreatedDate = new Date (2023, 0, 23)
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDate2 = new Date (2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());   //1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date ("2023-01-14") 
console.log(myCreatedDate3.toLocaleString());   //1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date ("01-15-2024") 
console.log(myCreatedDate4.toLocaleString());      //1/15/2024, 12:00:00 AM

/************************************ Timestamp ******************************** */

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //1724012688195
console.log(myCreatedDate.getTime());   //1674432000000

console.log(Math.floor(Date.now()/1000));   //1724012884

let newDate = new Date()
console.log(newDate);   //2024-08-18T20:29:58.688Z
console.log(newDate.getMonth() + 1);    //8
console.log(newDate.getDay());      //0

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))             //sunday






