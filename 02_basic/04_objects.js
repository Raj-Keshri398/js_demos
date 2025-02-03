//object singleton/ constructor

const tinderUser = new Object(); //this is a singleton object. when we print tinderUser it will print empty object.
//console.log(tinderUser);

const happenUser = {}; // this is a non singleton object. it will also print empty object.
happenUser.id = "123Raj"
happenUser.name = "Raj"
happenUser.age = 24
happenUser.isLoggedIn = false // add whole the data in empty happenUser.
//console.log(happenUser);


//declare the objects inside the object.
const regularUser = {
    email: "raj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raj",
            lastname: "keshri"
        }
    }
}

/* if we want to access the any key in nested object then use . to go inside the object. */
//console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
const obj3 = Object.assign({},obj1, obj2, obj4) /* using assing operator to concat the 2 or more object 
Objecct.assign(target, source). it will work first inisilize the target ans second are source. 
we can inilize the numerious of source. */

//console.log(obj3);

const obj5 = {...obj1, ...obj2}; // we can using spread method to concat the object like arrays.
console.log(obj5);

// value come from database like this 👇
//  when the user come from datebase it will come like an array form....

const users = [
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "R@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    },
]

console.log(users[2].email); //we can easily access any key value using index value like arrray

// we can access any object data using Object.keys/ Object.values method and print like array.
console.log(happenUser);
console.log(Object.keys(happenUser)); // print keys from happenUser object
console.log(Object.values(happenUser)); // print keys values from happenUser object
console.log(Object.entries(happenUser)); // print keys and values both using Object.entries

console.log(happenUser.hasOwnProperty('isLoggedIn')); // it will find any key exist or not inside the object.

//destructuring

const course = {
    coursename: "js in hindi",
    coureprice: "9999",
    courseInstructor: "hitesh"
}

//course.courseInstructor //dont use the type of syntax because if we want to print same key value in 
// many time then our code not look clean.

const {courseInstructor} = course // it is the optimize way to access the key using {} braces it is called destructuring.
console.log(courseInstructor);














