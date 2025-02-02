// string in array

const Mar_heros = ["ironman", "thor", "hulk"];
const Dc_heros = ["superman", "flash", "thunder"];
//Mar_heros.push(Dc_heros); // when we push one and to another array it will convert the whole array in string.
//console.log(Mar_heros);


//concat
// const allHeros = Mar_heros.concat(Dc_heros) // it will properly concate the 2 arrays in one array
// console.log(allHeros);


//spread operator most using add 2 arrays in a array

// const all_new_heros = [...Mar_heros, ...Dc_heros]; // it is working like concat.
// console.log(all_new_heros);

// 2d and 3d array printing flat array

// const another_number = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, 11, [12, 13, 14]]]; // this is the array inside the array

// const all_another_number = another_number.flat(Infinity); /* flat keyword using for flat all arrays and 
// infinity using for numerious of depth of array it will find it self and print flat array */

// console.log(all_another_number);

console.log(Array.isArray("Shiva")); // it will return false because here is asking boolean is an array or not.
console.log(Array.from("shiva")); // from keyword convert the string into array.
console.log(Array.from({name: "Raj"})); //  it will confuse what do i make array keys or value array. so it will retun empty array.


const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); // noraml variable convert into array using Array.of keyword.







