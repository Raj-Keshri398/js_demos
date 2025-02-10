const userEmail = "Raj@gmail.com";
if (userEmail) {
    console.log("Got the user Email");
} else {
    console.log("Don't have user email");
}

//=================== falsy value

//false = false in js is falsy value
//0 and -0 = is falsy value
//BigInt 0n = is falsy value
// "" = Empty string is falsy value
// null, undefined, NaN = is falsy value

//=================== turely value

//"0" = zero inside the string is truthy value
//'false' = false inside the string is truthy value
// " " = string with space is truthy value 
//[] = empty array is truthy value
//{} = empty object is truthy value
//function(){} = function is truthy value


const nameArray = [];
if (nameArray.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Caolescing Operator (??): null undefinded

//check the condition when the first value not any null or undefined it will take only first value.
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 3 ?? 10;

console.log(val1);

// Terniary Operator

const iceTeaPrice = 100;
//condition ? true : false
iceTeaPrice <= 80 ? console.log("less than  80") : console.log("Greater then 80");








