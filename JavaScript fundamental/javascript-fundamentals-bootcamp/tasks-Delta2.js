const database = {
    users: [
        {
            username: "Mahdi",
            premium: true,
            level: 55,
            country: "Afghanistan",
            games: [
                { title: "CS2", genre: "FPS", hours: 320, price: 0 },
                { title: "Elden Ring", genre: "RPG", hours: 200, price: 60 }
            ]
        },
        {
            username: "Jack",
            premium: false,
            level: 22,
            country: "Canada",
            games: [
                { title: "Minecraft", genre: "Sandbox", hours: 140, price: 30 },
                { title: "CS2", genre: "FPS", hours: 80, price: 0 }
            ]
        },
        {
            username: "Emma",
            premium: true,
            level: 80,
            country: undefined,
            games: [
                { title: "Valorant", genre: "FPS", hours: 350, price: 0 },
                { title: "Cyberpunk", genre: "RPG", hours: 350, price: 50 }
            ]
        }
    ],

    products: [
        { name: "Mouse", price: 50, quantity: 2 },
        { name: "Keyboard", price: 120, quantity: 1 },
        { name: "Monitor", price: 500, quantity: 2 },
        { name: "Headset", price: 150, quantity: 3 }
    ]
};





function getPremiumUsers(database = []) {
    const {users, products} = database

    const premiumusers = users
    .filter(user => user.premium)
    .map(user => user.username)

    const destructuring = users.map(({username, level, country = "Unknown"})=>{
        return `${username} | Level ${level} | ${country}`
    })

    const getAllgameTitles = users
    .flatMap(user => user.games)
    .map(game => game.title)
    
    const getAllgameTitlesUnique = [...new Set(
        users.flatMap(user => user.games)
        .map(game => game.title)
    )]

    const freeGames = users
    .flatMap(user => user.games)
    .filter(game => game.price === 0)
    .map(game => game.title)

    const freeGamesUnique = [...new Set(
        users.flatMap(user => user.games)
        .filter(game => game.price === 0)
        .map(game => game.title)
    )]

    const getHighestLevel = users.reduce((result, item)=>{
        return item.level > result.level ? item : result
    }, users[0])

    const totalHours = users.flatMap((user)=>{
        const total = user.games.reduce((result, item)=>{
            return item.hours + result
        }, 0)
    return `${user.username} -> ${total} hours`
    })  

    

    return {
        premiumusers,
        destructuring,
        getAllgameTitles,
        getAllgameTitlesUnique,
        freeGames,
        freeGamesUnique,
        getHighestLevel,
        totalHours,
        getPremiumUserGames
    }
}
console.log(getPremiumUsers(database))




