//--------------------------------- Numbers ---------------------------------------------

// const score = 300; // it is also define a number. here output will show 300.
// console.log(score); 

// const balance = new Number(300); // it is define and 100% assure this is the number. show the out will show
// // [Number: 300]
// console.log(balance);

// // constructor: Number()
// // toExponential: toExponential()
// // toFixed: toFixed()
// // toLocaleString: toLocaleString()
// // toPrecision: toPrecision()
// // toString: toString()
// // valueOf: valueOf()

// //we can change the number property to string property.
// console.log(balance.toString());
// console.log(balance.toString().length); // know the length of the string
// console.log(balance.toFixed(2)); // it will fix the value after the point example: 300.00

// const AnotherNumber = 123.85685;
// console.log(AnotherNumber.toPrecision(3)); // it will make roundoff the value 123.85685 roundoff 124.

// const values = 1000000000;
// console.log(values.toLocaleString()); // it will optimize the value and easy to read.



//---------------------------- Maths ------------------------------------------

console.log(Math.abs(-5)); // abs() change the negative value to positive value.
console.log(Math.round(7.6)); // round() use for roundoff the value.
console.log(Math.ceil(4.2)); // ceil() it will take first value and output will show 4.2 is 5
console.log(Math.floor(4.9)); // floor() it will take down value only.
console.log(Math.sqrt(25)); // divide the same number of the number 4 perfect square root is 2 
console.log(Math.pow(3, 4)); // first number is base and second number is power pow(base, power).
console.log(Math.min(3, 6, 4, 2)); // find the minimum value
console.log(Math.max(4, 7, 2, 5)); // find the maximum value
console.log(Math.random()); // it will show the random value between 0 and 1 only.
console.log(Math.random()*1000000 + 1); // if we want any 6 digit random number then random fucntion must be multiply with 1000000 of this number.
console.log(Math.floor(Math.random() * 100000 + 1)); // it will show roundoff 5 digit random number.


// it will the calculation to calculte 4- digit random number between 1000 to 9999.
const min = 1000;
const max = 9999;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);










