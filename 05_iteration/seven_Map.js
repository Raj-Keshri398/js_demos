const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map is also a callback function.
const NewNum = myNum.map( (num) => num + 10);
//console.log(NewNum);

//Chaining = we can use map().map() many times using chaining.
const newNums = myNum
                    .map( (num) => num * 10 )
                    .map( (num) => num + 2 )
                    .filter( (num) => num >= 40 && num <= 80)
console.log(newNums);

