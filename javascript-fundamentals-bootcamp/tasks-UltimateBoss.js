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


    const premiumPlayers = steam.filter((steamdetails)=>{
        return steamdetails.premium
    }).map((users)=>{
        return users.username
    })

    const highestLevelPlayer = steam.reduce((result, item)=>{
       return item.level > result.level ? item : result
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
       return item.hours > result.hours ? item : result
        }, steam[0].games[0])
    return gamedetails.hours > result.hours
            ? gamedetails : result;
    }, steam[0].games[0])








    const totalCourses = academy.reduce((result, item)=>{
        return item.courses.length + result
    }, 0)

    const totalStudents = academy.reduce((result, item)=>{
        const coursedetails = item.courses.reduce((result, item)=>{
            return item.students + result
        }, 0)
    return coursedetails + result
    }, 0)

    const biggestCourse = academy.reduce((result, item)=>{
        const coursedetails = item.courses.reduce((result, item)=>{
          return  item.students < result.students ? result : item
        }, academy[0].courses[0])
    return coursedetails.students > result.students
            ? coursedetails : result
    }, steam[0].games[0])







    const totalItems = shop.reduce((result, item)=>{
        return item.quantity + result
    }, 0)

    const totalRevenue = shop.reduce((result, item)=>{
        return result + item.price  * item.quantity
    }, 0)

    const mostExpensiveItem = shop.reduce((result, item)=>{
       return item.price < result.price ? result : item
    }, shop[0])

    const averagePrice = shop.reduce((result, item)=>{
        return item.price + result
    }, 0)







    const totalSolved = support.reduce((result, item)=>{
        return item.solved + result
    }, 0)

    const totalOpen = support.reduce((result, item)=>{
        return item.open + result
    }, 0)

    const hardestWorker = support.reduce((result, item)=>{
     return item.solved < result.solved ? result : item
    }, support[0])

    const everyoneSolvedAtLeastFive = support.every((solved)=>{
        return solved.solved >= 5
    })
    
    return {
        steam: {totalPlayer: steam.length,
            premiumPlayers,
            highestLevelPlayer: `${highestLevelPlayer.username} has the highest level`,
            totalGames,
            freeGames,
            mostPlayedGame
        },

        academy: {
            instructors: academy.length,
            totalCourses,
            totalStudents,
            biggestCourse
        },

        shop: {
                totalItems,
                totalRevenue,
                mostExpensiveItem,
                averagePrice: averagePrice / shop.length
        },

        support: {
            totalSolved,
            totalOpen,
            hardestWorker,
            everyoneSolvedAtLeastFive
        }
    }
}
console.log(generateCompanyDashboard(database))

