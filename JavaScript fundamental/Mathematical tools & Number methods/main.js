// Mathematical tools //
const random = Math.floor(Math.random() * 100) + 1;
console.log(random)


const randomlevel = Math.floor(Math.random() * 60);
console.log(`Level: ${randomlevel}`)


console.log(Math.floor(7.8));
console.log(Math.ceil(7.2));
console.log(Math.round(7.5));


const highest = Math.max(40, 12, 99, 5, 71);
console.log(highest);


const smallest = Math.min(40, 12, 99, 5, 71);
console.log(smallest);


const players = [
    { username: "Mahdi", hours: 450 },
    { username: "Jack", hours: 120 },
    { username: "Emma", hours: 620 }
];
const highesthour = Math.max(
    ...players.map((player)=>{
        return player.hours
    })
)
console.log(highesthour)





// Number methods //
console.log(Number('55') + 45)

const number = 19.98765;
console.log(number.toFixed(2));

console.log(parseInt('250px'));

console.log(parseFloat('19.95$'));

console.log(isNaN(Number('Mahdi')))

const products = [
    { name: "Mouse", price: "40.50" },
    { name: "Keyboard", price: "120.99" },
    { name: "Monitor", price: "500.00" }
];
const productsNumMethod = products.map((product)=>{
    return {
        name: product.name,
        price: Number(Number(product.price).toFixed(1))
    }
})
console.log(productsNumMethod)

