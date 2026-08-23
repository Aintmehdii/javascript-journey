const database = {
    players: [
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
                { title: "JavaScript", students: 40 },
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
            solved: 7,
            open: 5
        },

        {
            username: "Emma",
            solved: 24,
            open: 1
        }
    ]
};


function generateAdminDashboard(database) {
    const {players, academy, shop, support} = database
    

    const premiumPlayers = players
    .filter(player => player.premium)
    .map(player => player.username)

    const HighestLevel = players.reduce((result, item)=>{
        return item.level > result.level ? item : result
    }, players[0])   

    const averagePlayerlevel = players.reduce((result, item)=>{
        return item.level + result
    }, 0)

    const TotalHours = players.reduce((result, item)=>{
        const game = item.games.reduce((result, item)=>{
            return item.hours + result
        }, 0)
    return game + result
    }, 0)

    const hourAchivement = players
    .flatMap(player => player.games)
    .some(game => game.hours > 600)

    const Emma = players.find(player => player.username === 'Emma')

    const gameTitles = players.flatMap((item)=>{
        return item.games
    }).map(games => games.title)

    const Unique = [...new Set(
        players.flatMap((item)=>{
            return item.games
        }).map(games => games.title)
    )]

    const uniqueGenre = [...new Set(
        players.flatMap(item => item.games)
        .map(games => games.genre)
    )]

    const freeGames = [...new Set(
        players.flatMap(player => player.games)
        .map((games)=>{
            if (games.price === 0) {
                return games.title
            }
        })
    )]

    const MostPlayed = players.reduce((result, item)=>{
        const games = item.games.reduce((result, item)=>{
            return item.hours > result.hours ? result : item
        }, players[0].games[0])

    return games > result.hours ? result : games
    }, players[0].games[0])




    const instructorNames = academy.flatMap(instructor => instructor.instructor)

    const allCourses = academy.reduce((result, item)=>{
        return item.courses.length + result
    }, 0)

    const totalStudents = academy
    .flatMap(academy => academy.courses)
    .reduce((result, item)=>{
        return item.students + result
    }, 0)

    const biggestCourse = academy.reduce((result, item)=>{
        const courses = item.courses.reduce((result, item)=>{
            return item.students > result.students ? item : result
        }, academy[0].courses[0])
    return courses > result.hours ? result : courses
    }, academy[0].courses[0])

    const averagestudents = academy.reduce((result, item)=>{
        const courses = item.courses.reduce((result, item)=>{
            return item.students + result
        }, 0)
    return courses + result
    }, 0)



    const totalitems = shop.reduce((result, item)=>{return item.quantity + result}, 0)

    const totalInventoryValue = shop.reduce((result, item)=>{
        return result + item.price * item.quantity
    }, 0)

    const mostExpensiveProduct = shop.reduce((result, item)=>{
        return item.price > result.price ? item : result
    }, shop[0])

    const cheapestProduct = shop.reduce((result, item)=>{
        return item.price < result.price ? item : result
    }, shop[0])

    const generatedAt = new Date(2026, 8, 23)
    

    return {
        players: {totalPlayer: players.length,
        premiumPlayers,
        HighestLevel,
        averagePlayerlevel: averagePlayerlevel / players.length,
        TotalHours,
        hourAchivement,
        Emma,
        gameTitles,
        Unique,
        uniqueGenre,
        freeGames,
        MostPlayed},

        academy:  {   
        instructorNames,
        allCourses,
        totalStudents,
        biggestCourse,
        averagestudents: averagestudents / allCourses
    },


        shop: {
            totalitems,
            totalInventoryValue,
            mostExpensiveProduct,
            cheapestProduct
        },

    generatedAt}
}
console.log(generateAdminDashboard(database))
