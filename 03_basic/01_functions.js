//functions

function addTwoNum(num1, num2) /*this is called parameters */ {
   console.log(num1 + num2);
}

const result = addTwoNum(3, 5); //this is called arguments. using sum function here. 
console.log(result); // when we print result value it will show undefined.


function Sum(num1, num2) {
    console.log("Sum of Two Number is");
    return num1 + num2; // when we use return then we can print or execuate the value in a variable.
}

const sumResult = Sum(2, 7);
console.log(sumResult);


function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please Enter Your UserName");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage()); // when we do not input any value and the function is sending empty value it will print undefined.
console.log(loginUserMessage("Raj")); // when we input any value in function then run the code.

// -------------------------------- rest operator ----------------------------------------------------

function calculateCartPrice(...num1){
    return num1;
}
/* three dot ... is a spread operator and rest opeator it will work where we use. in function it is called
rest operator. when function has only 1 parameter but we can pass the numerious of value then use rest
operator because rest operator print the value in array form */
console.log(calculateCartPrice(200, 400, 500, 600));

//-------------------------------------------------------------------------------------------------

// object using in function
const user = {
    username: "Raj",
    age: 24
}

function handleObject(anyObject) {
    console.log((`Username is ${anyObject.username} and age is ${anyObject.age}`));
}
// function call
handleObject(user);

//we can also pass object inside the function call.
handleObject({
    username: "Amit",
    age: 25
})

//---------------------------------------------------------------------------------------------

// array using in function

const myArray = [200, 300, 400, 500, 600];
function returnMyArray(getArrayValue) {
    //we can access any index value too
    return getArrayValue[2];
}
//function call
console.log(returnMyArray(myArray));

//we can also pass array inside the function call.
console.log(returnMyArray([
    2000, 3000, 4000, 5000
]));






