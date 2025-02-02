// Arrays

const myArr = [1, 2, 3, 4, 5]; // declare arrays using square bracket
const heros = ["ironman", "spiderman", "hulk"]; // declare array in string

const myArr2 = new Array(1, 2, 3, 4); // object type array
// console.log(myArr2);

// //Arrays method

// myArr.push(6); //add the value end index.
// console.log(myArr);
// myArr.pop(); // remove the last index value
// console.log(myArr); 
// myArr.unshift(7); // add the value at starting index
// console.log(myArr);
// myArr.shift(); // remove the value at starting index.
// console.log(myArr);
// console.log(myArr.includes(9)); // it will find the value in array 9 is exist or not if 9 is not in array it will return boolean value true/false.
//console.log(myArr.indexOf(2)); // it find the value in which index.

// const newArr = myArr.join();
// console.log(typeof myArr); // it an array and the original array is an object.
// console.log(typeof newArr); // its an new array using join method it is the copy of array but its datatype is string.


// slice, splice

console.log("A ", myArr); // original array

const myArray1 = myArr.slice(1, 3); /* when using slice keyword it first number is initilize the value 
and send number is end point print index 1 value and index 2 */
console.log(myArray1);
console.log("B ", myArr);

const myArray2 = myArr.splice(1, 3); /* when using splice keyword it will print the whole value.
when the number inilized but it will remove the that value and manipulat the original array. */
console.log((myArray2));
console.log("C ", myArr);

/* difference between slice and splice slice is print the value where index will be inilized but splice 
remove that values */









