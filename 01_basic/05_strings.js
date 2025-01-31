const name = "Raj"
const title = "keshri"

//console.log(name + title); it is the normal method to concatenicate anything using plus sign.
// we can also use backtik `` to optimize way to the concatnicate the value.

console.log(`Hello my name is ${name.toUpperCase()} and my title is ${title.toUpperCase()}`); //it is called string interpolation


// string is also use with object. but not any changes of original string because it is using stack memory

const CodeName = new String("Gameplay");
console.log(CodeName[0]);
console.log(CodeName.length);
console.log(CodeName.toUpperCase());
console.log(CodeName);
console.log(CodeName.charAt(2)); // we can see the character using index number with using charAt() function
console.log(CodeName.indexOf('a')); // we can see index value using charater name with using indexOf() function.

const newCodeName = CodeName.substring(0, 3); // substring function use for part the value of string.
console.log(newCodeName);

const anotherCodeName = CodeName.slice(-7, 3); // slice is use for cut the value 
console.log(anotherCodeName);

const newStringName1 = "   Raj   ";
console.log(newStringName1);
console.log(newStringName1.trim()); // trim function is use for cut the space from start and end postion 

const url = "https://raj-keshri398.github.io/MyPortfolio%20";
console.log(url.replace('%20', "/")); // using replace function it will replace from another value like %20 will replace to / this.

console.log(url.includes('raj')); /*if we want to search any keyword/sting value present or not in url includes()
function help us to find the value and output will show True/false */

// these all the functions of the strings

// anchor: anchor()
// at: at()
// big: big()
// blink: blink()
// bold: bold()
// charAt: charAt()
// charCodeAt: charCodeAt()
// codePointAt: codePointAt()
// concat: concat()
// constructor: String()
// endsWith: endsWith()
// fixed: fixed()
// fontcolor: fontcolor()
// fontsize: fontsize()
// includes: includes()
// indexOf: indexOf()
// isWellFormed: isWellFormed()
// italics: italics()
// lastIndexOf: lastIndexOf()
// length: 0
// link: link()
// localeCompare: localeCompare()
// match: match()
// matchAll: matchAll()
// normalize: normalize()
// padEnd: padEnd()
// padStart: padStart()
// repeat: repeat()
// replace: replace()
// replaceAll: replaceAll()
// search: search()
// slice: slice()
// small: small()
// split: split()
// startsWith: startsWith()
// strike: strike()
// sub: sub()
// substr: substr()
// substring: substring()
// sup: sup()
// toLocaleLowerCase: toLocaleLowerCase()
// toLocaleUpperCase: toLocaleUpperCase()
// toLowerCase: toLowerCase()
// toString: toString()
// toUpperCase: toUpperCase()
// toWellFormed: toWellFormed()
// trim: trim()
// trimEnd: trimEnd()
// trimLeft: trimStart()
// trimRight: trimEnd()
// trimStart: trimStart()
// valueOf: valueOf()







