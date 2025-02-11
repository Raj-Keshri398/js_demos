// for of using mostly in array 

// ["", "", "", ""]; string in array
// [{}, {}, {}, {}] objects in array

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const number of arr) {
    //console.log(number);
}

const greetings = "Hello World";
for (const greet of greetings) {
    if (greet === " ") {
        continue;
    }
    //console.log(`Each char is ${greet}`);
}

// Maps 

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // map is not allow to duplicate value.

//console.log(map);

// loop using on map key and keysvalues..
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

// loop in objects

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Mario'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }  
// 
// ---------------for of loop is not iterate for object

