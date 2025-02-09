// Immediately Invoked Function Expression (IIFE)

(function names(){
    console.log(`Db Connected`); 
})(); // we can use iife to remove the global scope polution or iife execute the function rapidly.

( (name) => {
    console.log(`DB Connected Two ${name}`);
}) ('raj') // iife arrow function.

// we can write number of iife using ; 