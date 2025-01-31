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

//----------------------- Memory ------------------------

// stack memory (stack memory are use in primitive type of datatype), Heap memory (heap memory are use in Non-Primitive Datatype).

// ----------- Stack memory
// when the allocate the string value in myWork and anotherMyWork allocate the myWork value. then copy the value
// when we change the copy dataype value there will not change in original value.
// when we keep the value in stack memory then copy the value. original value won't be change.
let myWork = "Raj";
let anotherMyWork = myWork;
anotherMyWork = "welcome";
console.log(myWork);
console.log(anotherMyWork);

// ----------------- Heap memory
// In heap memory value is like a reference when we change the value in another object
// then reference value will change.
//when we keep the value in heap memory then refrence the value. original value will change here.

let user1 = {
    email: "keshri124",
    upi: "user@qrl"
}

let user2 = user1;
user2.email = "raj123";

console.log(user1.email);
console.log(user2.email);



