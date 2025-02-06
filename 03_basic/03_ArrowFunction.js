//object inside function and this
// this = this hold the current context.

const user =  {
    username: "Raj",
    age: 24,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to my website`);
        console.log(this); // here this print whole object 
    }
}

// user.welcomeMessage();
// user.username = "Sam"; // here change value of username inside the object.
// user.welcomeMessage(); // now here is print username sam instead raj.

// console.log(this); // here this value print only empty {} object.


// function Welcome() {
//     console.log(this);
// }

// Welcome();

// function declare arrow function

// basic arrow function 
// explict arrow function where use curly braces and return keyword must be use.
const AddTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(AddTwo(3, 6));

// implicit/ one line arrow function
const Sum = (num1, num2) => (num1 + num2); /* when we use () perenthesis then don't write return keyword
but we use curly braces then must be use return keyword. */
console.log(Sum(2, 4));

const Sub = (num1, num2) => ({username: "Raj"}); // here object must be use inside the parenthesis. 
console.log(Sub(6, 3));



