const database = {
    players: [
        {
            username: "Mahdi",
            premium: true,
            level: 55,
            country: undefined,
            games: [
                { title: "CS2", genre: "FPS", free: true },
                { title: "Elden Ring", genre: "RPG", free: false }
            ]
        },
        {
            username: "Jack",
            premium: false,
            level: 20,
            country: "Canada",
            games: [
                { title: "Minecraft", genre: "Sandbox", free: false },
                { title: "CS2", genre: "FPS", free: true }
            ]
        },
        {
            username: "Emma",
            premium: true,
            level: 80,
            country: "Germany",
            games: [
                { title: "Valorant", genre: "FPS", free: true },
                { title: "Cyberpunk", genre: "RPG", free: false }
            ]
        }
    ]
};


function generateES6Report(database) {
    const {players} = database;

    const premiumusers = players.filter((player)=>{
        return player.premium
    }).flatMap((username)=>{
        return username.username
    })

    const userdetails = players.map((player)=>{
        if (player.premium) {
            return `${player.username} ⭐ | Level ${player.level} | ${player.country ?? "Not Validated"}`
        } else{
            return `${player.username} | Level ${player.level} | ${player.country ?? "Not Validated"}`
        }
    })

    const uniquetitlegame = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((game)=>{
            return game.title
        })
    )]
    
    const freegames = players.flatMap((player)=>{
        return player.games
    }).filter((game)=>{
        if (game.free) {
            return game
        }
    }).map((game)=>{
        return game.title
    })

    const uniquegenres = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((game)=>{
            return game.genre
        })
    )]

    const highestLevel = players.reduce((result, item)=>{
        return item.level > result.level ? item : result
    }, players[0])
    
    const hasPremium = players.some((player)=>{
        return player.premium
    })

    const generatedAt = new Date()

    const hasCS2 = players.flatMap((player)=>{
        return player.games
    }).map((game)=>{
        return game.title.includes("CS2")
    })

    const firstFPS = players.flatMap((player)=>{
        return player.games
    }).find((game)=>{
        return game.genre === "FPS"
    })

    const joinedPremiumNames = players.filter((player)=>{
        return player.premium
    }).map((player)=>{
        return player.username
    })

    const languages = 'JavaScript, HTML, CSS'

    return {
        premiumusers,
        userdetails: userdetails.join("  ,  "),
        uniquetitlegame,
        freegames,
        uniquegenres,
        highestLevel,
        hasPremium,
        generatedAt: generatedAt.toDateString(),
        

        isArray: Array.isArray(players),
        hasCS2,
        firstFPS,
        joinedPremiumNames: joinedPremiumNames.join(),
        languages: languages.split(', '),
        reversedPremium: joinedPremiumNames.reverse()
    }
}
console.log(generateES6Report(database))
