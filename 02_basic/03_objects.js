//singleton
//Object.create = using in constructor

// object literals

const mySymbol = Symbol("key1"); //declare the symbol

const JsUser = {
    name: "Raj",
    "FullName": "Raj Keshri",
    [mySymbol]: "mykey1", // using symbol in side the object
    age: 20,
    location: "patna",
    email: "raj093@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}


console.log(JsUser.email); // it is the normal way to access the key value inside the object.
console.log(JsUser["email"]); /* it is the optimize way to access the key value inside the object 
because the key value is also an string */
console.log(JsUser["FullName"]); // it is the fully key value in string format it wont be access using . dot.
console.log(typeof JsUser[mySymbol]); //using symbol as a key word.

JsUser.email = "KeshriTcs@gmail.com"; //it will change the email value inside the object.
console.log(JsUser);
Object.freeze(JsUser); //it will freeze the whole object we cant change the key value inside the object.
//example changing the key value after freezing the object.

JsUser.email = "Raj456@gmail.com"; //can't change the value because jsuser object is freeze.
console.log(JsUser);

//------using function inside the jsuser object---------









