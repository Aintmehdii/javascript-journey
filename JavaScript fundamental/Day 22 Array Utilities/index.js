// Array Utilities //
const games = [
    "CS2",
    "Valorant",
    "Minecraft"
];
console.log(Array.isArray(games));

console.log(games.includes('Minecraft'));

console.log(games.indexOf('RDR2'));

console.log(games.join(" -> "));

const fruits = "Apple,Banana,Orange"
console.log(fruits.split(","));

const users = ["Mahdi", "Jack", "Emma"]
console.log(users.reverse());

console.log(games.slice(1, 3));

games.splice(1, 1);
console.log(games);
