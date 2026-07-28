// 👑 Ultimate Boss — Gaming Company Dashboard //
const database = {
    steam: [
        {
            username: "Mahdi",
            premium: true,
            level: 55,
            hours: 450,
            games: [
                { title: "CS2", price: 0, hours: 350 },
                { title: "Elden Ring", price: 60, hours: 100 }
            ]
        },
        {
            username: "Jack",
            premium: false,
            level: 18,
            hours: 120,
            games: [
                { title: "Minecraft", price: 30, hours: 120 }
            ]
        },
        {
            username: "Emma",
            premium: true,
            level: 80,
            hours: 620,
            games: [
                { title: "Valorant", price: 0, hours: 250 },
                { title: "Cyberpunk", price: 50, hours: 370 },
                { title: "RDR2", price: 60, hours: 0 }
            ]
        }
    ],

    academy: [
        {
            instructor: "John",
            courses: [
                { title: "HTML", students: 20 },
                { title: "CSS", students: 15 }
            ]
        },
        {
            instructor: "Sarah",
            courses: [
                { title: "JavaScript", students: 35 },
                { title: "React", students: 30 }
            ]
        }
    ],

    shop: [
        { name: "Mouse", price: 50, quantity: 2 },
        { name: "Keyboard", price: 120, quantity: 1 },
        { name: "Monitor", price: 500, quantity: 2 },
        { name: "Headset", price: 150, quantity: 3 }
    ],

    support: [
        {
            username: "Mahdi",
            solved: 15,
            open: 2
        },
        {
            username: "Jack",
            solved: 5,
            open: 8
        },
        {
            username: "Emma",
            solved: 22,
            open: 1
        }
    ]
};

function generateCompanyDashboard(database) {
    const {steam, academy, shop, support} = database;

    const totalPlayers = steam.map(()=>{
        return steam
    })

    const premiumPlayers = steam.filter((steamdetails)=>{
        return steamdetails.premium
    }).map((users)=>{
        return users.username
    })

    const highestLevelPlayer = steam.reduce((result, item)=>{
        if (item.level > result.level) {
            return item
        } return result
    }, steam[0])

    const totalGames = steam.reduce((result, item)=>{
        return item.games.length + result
    }, 0)

    const freeGames = steam.map((steamdetails)=>{
        const gamedetails = steamdetails.games.filter((game)=>{
            return game.price === 0
        }).map((gametitles)=>{
            return gametitles.title
        })
        return gamedetails
    })

    const mostPlayedGame = steam.reduce((result, item)=>{
        const gamedetails = item.games.reduce((result, item)=>{
            if (item.hours > result.hours) {
                return item
            } return result
        }, steam[0].games[0])
    return gamedetails
    }, 0)

    return {
        steam: {totalPlayer: totalPlayers.length,
            premiumPlayers,
            highestLevelPlayer: `${highestLevelPlayer.username} has the highest level`,
            totalGames,
            freeGames,
            mostPlayedGame
        }
    }
}
console.log(generateCompanyDashboard(database))

