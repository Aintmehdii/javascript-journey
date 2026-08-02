

// Task 9 — Mini Boss ⭐⭐⭐ //
function generateSteamReport(players) {
    const premiumPlayer = players.filter(({premium})=>{
        return premium
    }).map((playerstatus)=>{
        return playerstatus.username
    })

    const regularPlayer = players.filter(({premium})=>{
        return !premium
    }).map((playerstatus)=>{
        return playerstatus.username
    })

    const highestHours = players.reduce((result, item)=>{
        if (item.hours > result.hours) {
            return item
        } return result
    }, players[0])

    const averageHours = players.reduce((result, item)=>{
        return item.hours + result
    }, 0)

    const freegames = players.map((details)=>{
        const games = details.games.filter((game)=>{
            if (game.price === 0) {
                return game.title
            }
        })
        return games
    })

    const totalGames = players.reduce((result, item)=>{
        return item.games.length + result
    }, 0) 

    const totalHours = players.reduce((result, item)=>{
        return item.hours + result
    }, 0) 
return {
    premiumPlayer,
    regularPlayer,
    highestHours : `Highest belongs to ${highestHours.username}`,
    averageHours: averageHours / players.length,
    freegames,
    totalGames,
    totalHours
}
}
console.log(generateSteamReport(players))







// const database = {
    players: [
        {
            username: "Mahdi",
            premium: true,
            games: [
                { title: "CS2", genre: "FPS", free: true },
                { title: "Elden Ring", genre: "RPG", free: false }
            ]
        },
        {
            username: "Jack",
            premium: false,
            games: [
                { title: "Minecraft", genre: "Sandbox", free: false },
                { title: "CS2", genre: "FPS", free: true }
            ]
        },
        {
            username: "Emma",
            premium: true,
            games: [
                { title: "Valorant", genre: "FPS", free: true },
                { title: "Cyberpunk", genre: "RPG", free: false }
            ]
        }
    ]
};

function generateLibrary(database) {
    const {players} = database;
    const premiumPlayers = players.filter((player)=>{
        return player.premium
    }).map((playername)=>{
        return playername.username
    })

    const allGames = players.flatMap((game)=>{
        return game.games
    }).map((gamename)=>{
        return gamename.title
    })
    
    const uniqueGames = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((gametitle)=>{
            return gametitle.title
        })
    )]

    const freeGames = players.flatMap((player)=>{
        return player.games
    }).filter((game)=>{
        return game.free
    }).map((gamename)=>{
        return gamename.title
    })

    const uniqueFreeGames = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).filter((game)=>{
            return game.free
        }).map((gamename)=>{
            return gamename.title
        })
    )]

    const genres = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((genre)=>{
            return genre.genre
        })
    )]
    return {
        totalPlayers: database.players.length,
        premiumPlayers,
        allGames,
        uniqueGames,
        freeGames,
        uniqueFreeGames,
        genres
    }
}
console.log(generateLibrary(database))



