//const coding =["js", "ruby", "java", "python", "cpp"];

// //when we store forEach value in a variable and print that variable it will always return undefined.
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } );

// console.log(values);


// const myNum = [5, 6, 7, 8, 2, 3, 4, 5, 1];

// //filter is use callback function but must be given a condition.
// const newNum = myNum.filter( (num) => num > 4)
// console.log(newNum);

// // filter is use callback function but when be given a condition inside the scope must be write return keyword.
// const newNUm2 = myNum.filter( (num) => {
//     return num > 5;
// })

// console.log(newNUm2);

// // callback function using codition
// const newNum3 = []
// myNum.forEach( (num) => {
//     if(num > 4){
//         newNum3.push(num)
//     }
// })

// console.log(newNum3);

const books = [
    { title: 'Book one', genre: 'Friction', publish: 1981, 
        edition: 2004 },
    { title: 'Book two', genre: 'Non-Friction', publish: 1992,
        edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999, 
        edition: 2007 },
    { title: 'Book four', genre: 'Non-Friction', publish: 1989, 
        edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, 
        edition: 2014 },
    { title: 'Book six', genre: 'Friction', publish: 1987, 
        edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986, 
        edition: 1996 },
    { title: 'Book eight', genre: 'Science', publish: 2011, 
        edition: 2016 },
    { title: 'Book nine', genre: 'Non-Friction', publish: 1981, 
        edition: 1989 },
];

//const userBook = books.filter( (book) => book.genre === 'History')
const userBook = books.filter( (book) => {
    return book.edition >= 2000 && book.genre ==='History'
} )
console.log(userBook);






