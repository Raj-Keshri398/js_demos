// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log("5 is here");
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop ${j} and inner Loop ${i}`);
        //console.log(i + ' * ' + j + ' = ' + i*j);
        //console.log(`${i} * ${j} = ${i*j}`); 
    }  
}

let MyArray = ["Flash", "Ironman", "Thor"];
//console.log(MyArray.length);

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    //console.log(element);
}


// break and continue

// break key word use for break the loop and go out from the loop
// contine key word use for one time skip that value or other value will be run.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        //console.log("Detected 5");
        break;
    }
    //console.log(`Value of i is ${i}`);
    
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}