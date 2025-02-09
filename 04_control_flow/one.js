// if statement

// if (condition){

// }

// conditional operators --->     (<, >, <=, >=, ==, !=, ===, !==)


//=============================== if... else ==============================
// const tempurature = 34;
// if(tempurature < 50) {
//     console.log("Less than 50");  
// } else {
//     console.log("Greater than 50");
// }

// console.log("Executed");

// ===============================if else condition priority of scope ===================================
// const score = 200;

// if(score > 100) {
//     const power = "fly";
//     console.log(`user power : ${power}`);
// }

const userLoggedIn = true;
const debitcard = true;
const loggedInfromGoogle = false;
const loggedInfromGmail = true;

if (userLoggedIn && debitcard) {
    console.log("Allow to use this feature");
}

if (loggedInfromGmail || loggedInfromGoogle) {
    console.log( "user Logged In");
}
