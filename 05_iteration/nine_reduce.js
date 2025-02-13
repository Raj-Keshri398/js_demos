const myNum = [1, 2, 3];

// simple function
const myTotal = myNum.reduce(function (acc, current) {
    console.log(`acc: ${acc} and current ${current}`);
    return acc + current;
}, 0);

console.log(myTotal);

//arrow callback function
const myTotals = myNum.reduce( (acc, curr) => {
    console.log(`acc: ${acc} and current ${curr}`);
    return acc + curr
}, 0);
console.log(myTotals);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Pyhton Course",
        price: 5999
    },
    {
        itemName: "Java Course",
        price: 6999
    }
];

const priceToday = shoppingCart.reduce( (acc, item) => {
    if (Number.isInteger(item.price)) {
        return acc + item.price
    }
   
}, 0)

console.log(priceToday);


