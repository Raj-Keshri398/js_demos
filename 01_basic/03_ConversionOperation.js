let score = "22"
//console.log(typeof score);

let valueInnumber = Number(score);
//console.log(typeof valueInnumber); //here is the change the any string type number of value in different datatypes with the use of Conversion like string to number, float, double etc..

let scores = "223hug"
let valueInNum = Number(scores);
//console.log(valueInNum); //when the number with alphabet and convert the number in proper number and output will show NaN and typeof will show Number.

// "33" => 33
// "3345gd" => NaN
// "true" => 1 , "false" => 0
// "undefined" => NaN
// "null" => 0
//when we declare these type of things then the output will show this type...

let isLoggedIn = 1;
let booleanInLogged = Boolean(isLoggedIn);
//console.log(booleanInLogged);

// 1 => true
// 0 => false
// "" empty string => false
// "hello" any string => true

let a = 33;
let StingNumber = String(a);
//console.log(typeof StingNumber);

// ---------------------- Operations ---------------------------

let value = 2;
let negVal = -value;
// console.log(negVal);

// console.log(2+2); //addition
// console.log(4-3); //subtraction
// console.log(2*2); //multiplication
// console.log(2**3); //power
// console.log(5%2); //remainder
// console.log(2/2); //quotient


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
//these type of code in js not consider in programming its only exam base coding.
//when we use first in sting then all js assume all the console code as a string and when we use first in number then js perform the number first then string.

let x = 3;
const m = x++;

console.log(`x:${x}, m:${m}`);
// Expected output: "x:4, m:3"

let y = 3;
const n = ++y;

console.log(`y:${y}, n:${n}`);