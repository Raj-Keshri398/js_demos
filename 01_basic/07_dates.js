// Dates

let myDate = new Date();
// console.log(typeof myDate); // output will show object because here is date is an object.

// console.log(myDate); // it show the date in complex form.
// console.log(myDate.toString()); // it will show the date stirng format.
// console.log(myDate.toDateString()); // it will show optimize way date. 
// console.log(myDate.toLocaleString()); // it will show date & time using slash /
// console.log(myDate.toLocaleDateString()); // it will show date using slash /

//let myCreateDate = new Date(2023, 0, 23);
let myCreateDate = new Date("01-13-2023");
//console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp); // time will show in miliSecond
// console.log(myCreateDate.getTime()); // it will show the miliSecond time to took this date value.
// console.log(Math.floor(Date.now()/1000)); // it will show the date it second.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); // if we want to know about month then use getMonth() + 1 because it will dtart from 0.
console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(`${newDate.getDay()} and time is ${newDate.getTime()}`);

//we can more optmize the date time value using object

// newDate.toLocaleString('default', {
//     weekday: "long"
// })










