
// Sort //
const numbers = [50, 10, 100, 5];
const sortnumbers = numbers.sort((a, b)=> a - b);
console.log(sortnumbers);


const names = [
    "Mahdi",
    "Jack",
    "Emma",
    "Ali"
];
const sortedname = names.sort();
console.log(sortedname)


const Hackerlaptops = [
    {
        brand: "Apple",
        ram: 32
    },
    {
        brand: "Asus",
        ram: 16
    },
    {
        brand: "Lenovo",
        ram: 8
    }
];
const SortedHackerlaptops = Hackerlaptops.sort((a, b)=>a.ram - b.ram)
console.log(SortedHackerlaptops)

const SortedHackerlaptopsBtoS = Hackerlaptops.sort((a, b)=>b.ram - a.ram)
console.log(SortedHackerlaptopsBtoS)


const steam = [
    {
        username: "Mahdi",
        hours: 350
    },
    {
        username: "Jack",
        hours: 120
    },
    {
        username: "Emma",
        hours: 500
    },
    {
        username: "Alex",
        hours: 250
    }
];
const Sortedhours = steam.sort((a, b)=> b.hours - a.hours);
console.log(Sortedhours)
// ================================================================  //



// Destructuring //
const steamuser = {
    steamname: 'Mahdi',
    steamage: 18
}
const {steamname, steamage} = steamuser;
console.log(`${steamname} is ${steamage} years old`)
 



const spotifyuser = {
    name: "Mahdi",
    age: 20,
    country: "Afghanistan",
    hobby: "Programming"
};
const {name, age, country, hobby} = spotifyuser;
console.log(`${name} (${age}) - ${country}`)




const laptop = {
    brand: "Asus",
    specs: {
        cpu: "Intel i7",
        ram: 16,
        storage: "1TB SSD"
    }
};
const {brand, specs: {cpu, ram, storage}} = laptop;
console.log(`${brand}
${cpu}
${ram}
${storage}`)



const games = [
    "CS2",
    "Valorant",
    "Minecraft",
    "Elden Ring"
];
const [firstgame, secondgame] = games;
console.log(firstgame, secondgame)

const [ , ,thirdgame] = games;
console.log(thirdgame)

console.log(`Favorite games:
${firstgame}
${secondgame}`)




const colors = [
    ["Red", "Blue"],
    ["Green", "Yellow"]
];
const [[firstcolor, secondcolor], [thirdcolor, forthcolor]] = colors
console.log(firstcolor,secondcolor,thirdcolor,forthcolor);



const players = [
    {
        pname: "Mahdi",
        goals: 35
    },
    {
        pname: "Jack",
        goals: 12
    },
    {
        pname: "Emma",
        goals: 18
    }
];
players.forEach(({ pname, goals }) => {
    console.log(`${pname} - ${goals}`)
});


steam.forEach(({username, hours}) => {
    console.log(`${username} - ${hours}h`)
});
