// Set, Flat & FlatMap //

const games = [
    ["CS2", "Valorant"],
    ["Minecraft"],
    ["RDR2", "Cyberpunk"]
];
const falattenGames = games.flat();
console.log(falattenGames);





const academy = [
    [
        ["HTML", "CSS"],
        ["JavaScript"]
    ],
    [
        ["React"]
    ]
];
const levelflattenAcademy = academy.flat(2);
console.log(levelflattenAcademy)





const players = [
    {
        username: "Mahdi",
        games: [
            "CS2",
            "Elden Ring"
        ]
    },
    {
        username: "Jack",
        games: [
            "Minecraft"
        ]
    },
    {
        username: "Emma",
        games: [
            "Valorant",
            "Cyberpunk"
        ]
    }
];
const allplayergames = players.flatMap((games)=>{
    return games.games
})
console.log(allplayergames)




const Steamgames = [
    "CS2",
    "Valorant",
    "CS2",
    "Minecraft",
    "Valorant",
    "RDR2"
];

const uniqueSteamgames = [...new Set(Steamgames)];
console.log(uniqueSteamgames)






const steam = [
    {
        username: "Mahdi",
        games: [
            "CS2",
            "Valorant",
            "Minecraft"
        ]
    },
    {
        username: "Jack",
        games: [
            "CS2",
            "RDR2"
        ]
    },
    {
        username: "Emma",
        games: [
            "Cyberpunk",
            "Minecraft",
            "Valorant"
        ]
    }
];
const uniqueSteamgame = [
    ...new Set(
        steam.flatMap((details)=>{
            return details.games
        })
    )
]
console.log(uniqueSteamgame)






const users = [
    {
        username: "Mahdi",
        games: [
            { title: "CS2", free: true },
            { title: "Elden Ring", free: false }
        ]
    },
    {
        username: "Jack",
        games: [
            { title: "Valorant", free: false }
        ]
    },
    {
        username: "Emma",
        games: [
            { title: "Cyberpunk", free: false },
            { title: "CS2", free: true }
        ]
    }
];
const freegameofusers = users.flatMap((details)=>{
    return details.games
}).filter((games)=>{
    return games.free
}).map((games)=>{
    return games.title
})

console.log(freegameofusers)





const uniquefreeusergames = [...new Set(
    users.flatMap((details)=>{
        return details.games
    }).filter((games)=>{
        return games.free
    }).map((games)=>{
        return games.title
    })
)]
console.log(uniquefreeusergames)





