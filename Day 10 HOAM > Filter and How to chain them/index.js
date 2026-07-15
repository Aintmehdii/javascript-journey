// High Order Array Method //



// Filter //
//========================================================//
const prices = [
    50,
    200,
    30,
    500,
    100
];
const pricehighterthan100 = prices.filter((price)=>{
    return price > 100
})
console.log(pricehighterthan100)
//========================================================//




//========================================================//
const movies = [
    "Interstellar",
    "Tenet",
    "Batman",
    "Inception"
];
const movieincludeT = movies.filter((movie)=>{
    return movie.toLocaleLowerCase().includes(`t`)
}) 
console.log(movieincludeT);
//========================================================//




//========================================================//
const users = [
    {
        name: "Mahdi",
        premium: true
    },
    {
        name: "Jack",
        premium: false
    },
    {
        name: "Emma",
        premium: true
    }
];
const Pusers = users.filter((user)=>{
    return user.premium === true
})
console.log(Pusers)
//========================================================//



//========================================================//
const laptops = [
    {
        brand: "Asus",
        ram: 16
    },
    {
        brand: "Lenovo",
        ram: 8
    },
    {
        brand: "Apple",
        ram: 32
    }
];
const hightestlaptopram = laptops.filter((laptop)=>{
    return laptop.ram >=16
})
console.log(hightestlaptopram)
//========================================================//






 




// How to chain each HOAM together // 
//========================================================//
const Steamusers = [
    {
        username: "Mahdi",
        premium: true,
        games: [
            {
                title: "CS2",
                hours: 350,
                genre: "FPS"
            },
            {
                title: "Valorant",
                hours: 180,
                genre: "FPS"
            }
        ]
    }
];


// Steam users details //
Steamusers.forEach(steamuser => {
    console.log(`===== ${steamuser.username} =====
Premium: ${steamuser.premium}`);
console.log(`Games:`)
        steamuser.games.forEach((usergames)=>{
            console.log(`- ${usergames.title}`)
        })

});


// Only steam usernames with premium account //
const steampremiumusers = Steamusers
    .filter((Premiumuser)=>{
        return Premiumuser.premium === true;
})
    .map((Premiumuser)=>{
        return Premiumuser.username
    })
console.log(`Premium users: ${steampremiumusers}`)


// Steam users with their games //
const steamusersdetial = Steamusers.map((steamuserdetial)=>{
    return {
        username: steamuserdetial.username,

        //Inner map//
            games: steamuserdetial.games.map((game)=>{
                return game.title
            })
        //Inner map//
    }
})
console.log(steamusersdetial)
//========================================================//
