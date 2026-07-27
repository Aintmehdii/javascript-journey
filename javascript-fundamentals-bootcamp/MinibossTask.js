

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



