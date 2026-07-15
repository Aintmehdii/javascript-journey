const gamingPlatform = [
    {
      username: "Mahdi",
      country: "Azerbaijan",
      premium: true,
        games: [
            {
            title: "Valorant",
            genre: "FPS",
            hoursPlayed: 320,
                achievements: [
                    "Radiant",
                    "100 Headshots",
                    "Knife Master"
                ]
            },

            {
            title: "CS2",
            genre: "FPS",
            hoursPlayed: 580,
                achievements: [
                    "Global Elite",
                    "Ace",
                    "Clutch King"
                ]
            }
      ]
},
        {
        username: "Jack",
        country: "Canada",
        premium: false,
        games: [
        {
            title: "Minecraft",
            genre: "Sandbox",
            hoursPlayed: 700,
            achievements: [
            "First Diamond",
            "The End",
            "Beacon Builder"
            ]
        },
        {
            title: "GTA V",
            genre: "Open World",
            hoursPlayed: 260,
            achievements: [
            "Master Driver",
            "Millionaire"
            ]
        }
        ]
    },

{
    username: "Mahdi",
        country: "England",
        premium: true,
        games: [
        {
            title: "GenshinImpact",
            genre: "Gacha",
            hoursPlayed: 1000,
            achievements: [
            "100 Charecter",
            "The End Game",
            "1 million damage"
            ]
        },
      ]
    }
];


for (let i = 0; i < gamingPlatform.length; i++){
console.log(`========================================
Player Details:
${gamingPlatform[i].username.toUpperCase()}
${gamingPlatform[i].country.toLowerCase()}
Premium: ${gamingPlatform[i].premium}
========================================
`)
console.log(`Total games: ${gamingPlatform[i].games.length}`)
console.log(`Games
------------------`)
    for (let g = 0; g < gamingPlatform[i].games.length; g++){
        console.log(`${gamingPlatform[i].games[g].title}`)
        console.log(`Game: ${gamingPlatform[i].games[g].title}
Length: ${gamingPlatform[i].games[g].title.length}
First Letter: ${gamingPlatform[i].games[g].title.substring(0, 1)}
Last Letter: ${gamingPlatform[i].games[g].title.slice(-1)}

`)

        console.log(`Achivements
-----------------`)
        for (let a = 0; a < gamingPlatform[i].games[g].achievements.length; a++){
            console.log(` - ${gamingPlatform[i].games[g].achievements[a]}`)
        }
console.log(`-----------------`)
        console.log(`Genre: ${gamingPlatform[i].games[g].genre}
Hours: ${gamingPlatform[i].games[g].hoursPlayed}

`)
    }
} 

// I clean it in my own way but it looks good  //
