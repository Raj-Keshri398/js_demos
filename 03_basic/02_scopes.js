/* scopes: carly braces {} is known as scopes. when carly brace comes in function or if... else.. is
known as scope of program. means us program ka scope. */

//var c = 300;
// we declare any value without scope is called global scope.
// now day var is not useable due to example if we declare var inside the scope but we can easily operate out of the scope.

let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    //var c = 30;
    //console.log("Inner : ", a);
    
}  // we write any code inside the scope is called block code.

//console.log(a);
//console.log(b);
//console.log(c);


//delcare function inside the function and see the importance of scope.
// In nested function child function access/use the parent variable easily.

function one() {
    const name = "Raj";

    function two() {
        const websites = "Google";
        //console.log(name);
    }
    //console.log(websites); // we can't operate the value out of the scope if the value exist inside the scope.
    two(); // we call function two() to run the function
}

one(); // we call function one() to run the function.
// first step : run function one()
// second step : after run function one() then run function two() 
// third step : after run function two() print function one name. because name is global for function two().

// understand scope using if... else....

if(true) {
    const username = "KeshriRaj";
    if(username === "KeshriRaj") {
        const website = " Gmail";
        //console.log(username + website); 
    }
    // console.log(website); // we can't print website value out of the scope.
}
//console.log(username); // we can't print username value out of the if condition scope.


//--------------------- function declaration with or without expression ----------------------

console.log(AddOne(5));
// we can call and sent the value of noraml function before and after declared.
function AddOne(num) {
    return num + 1;
}

/* this is the expression function because AddTwo is a variable it hold the function data. we can't call/ use this
function before declared. */
const AddTwo = function(num) {
    return num + 2;
}
console.log(AddTwo(5));






