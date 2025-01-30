// Primitive Datatype

/* Primitive Datatype is 7 categories 
 Sting, Number, Boolean, null, undefined, Symbol, BigInt. */
const score = 2; //number
const newscore = 2.3; //float
const isLogged = false; //boolean
const outsideTemp = null; // null output will object
let userEmail; //undefined

const id = Symbol('123');
const newId = Symbol('123');
console.log(id === newId); // false

let bigInt = 8765485485n; //use n in last to denote the number in bigint.


// Reference/Non-Primitive Datatype.

// Arrays, Objects, Functions

const heros = ["ironman", "spiderman", "hulk"];

let myObj = {
    name: "hello",
    age: 22
}

let myFunction = function() {
    console.log("hi");
}
