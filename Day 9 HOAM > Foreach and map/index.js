// High Order Array Methods //



//Foreach//
const movies = [
    "Interstellar",
    "Inception",
    "Tenet",
    "Oppenheimer"
];
movies.forEach((movie)=>{
    console.log(movie)
})
movies.forEach((movie, index)=>{
    console.log(index, movie)
})


const students = [
    {
        name: "Mahdi",
        age: 20
    },
    {
        name: "Jack",
        age: 22
    },
    {
        name: "Emma",
        age: 19
    }
];
students.forEach((student)=>{
    console.log(student.name)
    console.log(student.age)
})
//---------------------------------------------------------------//
// Nested Foreach //
const user = [
    {
        name: "Mahdi",
        hobbies: [
            "Gaming",
            "Coding",
            "Football"
        ]
    },
    {
        name: "Jack",
        hobbies: [
            "Reading",
            "Gym"
        ]
    }
];
user.forEach((u)=>{
    console.log(u.name)
        u.hobbies.forEach((hobbie)=>{
            console.log(` - ${hobbie}`)
        })
})
//---------------------------------------------------------------//







//Map//
const numbers = [5, 10, 15, 20];
const thripled = numbers.map((number)=>{
    return number * 3;
});
console.log(thripled);




const countries = [
    "Japan",
    "Brazil",
    "Canada"
];
const Cuppercase = countries.map((country)=>{
    return country.toUpperCase();
});
console.log(Cuppercase)





const players = [
    {
        name: "Messi",
        goals: 20
    },
    {
        name: "Haaland",
        goals: 31
    },
    {
        name: "Yamal",
        goals: 15
    }
];
const Pname = players.map((player)=>{
    return player.name;
})
console.log(Pname);


const x = players.map((i)=>{
    return `${i.name} - ${i.goals}`;
})
console.log(`${x}`);




// Foreach and Map exam //
// DB of a restraunt menu //
const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Salad"
];
foods.forEach(Food => {
    console.log(`Food: ${Food}`)
});

const i = foods.map((food)=>{
    return `I like ${food}`
})
console.log(i)



// DB of prices //
const prices = [
    10,
    25,
    100,
    50
];
prices.forEach(price => {
    console.log(`Price: $${price}`)
});

const p = prices.map((price)=>{
    return `$${price}`
})
console.log(p)



// DB of users in application //
const users = [
    {
        name: "Mahdi",
        age: 20
    },
    {
        name: "Jack",
        age: 22
    },
    {
        name: "Emma",
        age: 19
    }
];
users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`)
});

const u = users.map((user)=>{
    return `${user.name} (${user.age})`
})
console.log(u)



// DB of laptops details //
const laptops = [
    {
        brand: "Asus",
        ram: 16,
        cpu: "Intel"
    },
    {
        brand: "Lenovo",
        ram: 32,
        cpu: "AMD"
    },
    {
        brand: "Apple",
        ram: 24,
        cpu: "M4"
    }
];
laptops.forEach(laptop => {
    console.log(`Brand: ${laptop.brand}
Ram: ${laptop.ram}
CPU: ${laptop.cpu}`)
});

const l = laptops.map((laptop)=>{
    return `${laptop.brand} - ${laptop.ram}GB`
})
console.log(l)



// DB of steam game detials //
const steam = [
    {
        title: "CS2",
        genre: "FPS",
        achievements: [
            "Ace",
            "Global Elite",
            "100 Wins"
        ]
    },
    {
        title: "Elden Ring",
        genre: "RPG",
        achievements: [
            "First Boss",
            "Level 100"
        ]
    }
];
steam.forEach(details => {
    console.log(`
Game: ${details.title}
Genre: ${details.genre}`)
console.log(`Achivement:`)
    details.achievements.forEach(achievement => {
        console.log(`- ${achievement}`)
    });
});

const s = steam.map((Sdetails)=>{
    return `${Sdetails.title} (${Sdetails.genre})`
})
console.log(s)

const SA = steam.map((SAchivements)=>{
    return {
        title: SAchivements.title,
        achievements: SAchivements.achievements.length
    };
})
console.log(SA)

