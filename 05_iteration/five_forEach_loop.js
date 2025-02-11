// for each loop

const coding = ["js", "java", "python", "ruby", "cpp"];
// coding.forEach(function (item) {
//     //console.log(item);
// }); 

// coding.forEach( (item) => {
//     //console.log(item); 
// })

// function printMe(item){
//     //console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "C++",
        languageFilename: "cpp"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]

mycoding.forEach( (item)=> {
    console.log(item.languageName);
    
})