const database = {
    players: [
        {
            username: "Mahdi",
            premium: true,
            level: 55,
            hours: 520,
            country: "Afghanistan",
            games: [
                { title: "CS2", genre: "FPS", hours: 320, free: true },
                { title: "Elden Ring", genre: "RPG", hours: 200, free: false }
            ]
        },
        {
            username: "Jack",
            premium: false,
            level: 18,
            hours: 140,
            country: "Canada",
            games: [
                { title: "Minecraft", genre: "Sandbox", hours: 140, free: false }
            ]
        },
        {
            username: "Emma",
            premium: true,
            level: 81,
            hours: 700,
            country: undefined,
            games: [
                { title: "Valorant", genre: "FPS", hours: 350, free: true },
                { title: "Cyberpunk", genre: "RPG", hours: 350, free: false },
                { title: "CS2", genre: "FPS", hours: 0, free: true }
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
        { name: "Mouse", price: 40, quantity: 2 },
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

function generateDashboard(database){
    const {players, academy, shop, support} = database;
    
    const Premiumplayers = players.filter((player)=>{
        return player.premium
    }).map((playerusername)=>{
        return playerusername.username
    })

    const Highestlevelplayer = players.reduce((result, item)=>{
        return item.level > result.level ? item : result
    }, players[0])

    const Totalhoursplayed = players.reduce((result, item)=>{
        return item.hours + result
    }, 0)

    const Averagelevel = players.reduce((result, item)=>{
        return item.level + result
    }, 0)

    const Doesanyonehavemorethan600hours = players.some((player)=>{
        return player.hours >= 600
    })

    const FindEmma = players.find((player)=>{
        return player.username === 'Emma'
    })
    
    const Allgameuniquetitles = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((game)=>{
            return game.title
        })
    )]

    const Uniquegenres = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).map((game)=>{
            return game.genre
        })
    )]
    
    const Freegametitles = players.flatMap((player)=>{
        return player.games
    }).filter((game)=>{
        return game.free
    }).map((game)=>{
        return game.title
    })

    const uniqueFreegametitles = [...new Set(
        players.flatMap((player)=>{
            return player.games
        }).filter((game)=>{
            return game.free
        }).map((game)=>{
            return game.title
        })
    )]
    
    const Misc = players.map((player)=>{
        if (player.premium) {
            return `${player.username} ⭐ | Level ${player.level} | ${player.country ?? 'Guest Country'}`
        } else {
            return `${player.username} | Level ${player.level} | ${player.country ?? 'Guest Country'}`
        }
    })




    const Instructornames = academy.map((academy)=>{
        return academy.instructor
    })

    const Totalcourses = academy.reduce((result, item)=>{
        return item.courses.length + result
    }, 0)

    const Totalstudents = academy.reduce((result, item)=>{
        const students = item.courses.reduce((result, item)=>{
            return item.students + result
        }, 0) 
    return students + result
    }, 0)

    const Biggestcourse = academy.reduce((result, item)=>{
        const courses = item.courses.reduce((result, item)=>{
            return item.students > result.students ? item : result
        }, academy[0].courses[0])
    return courses.students > result.students ? courses : result
    }, academy[0].courses[0])

    const Averagestudentspercourse = academy.reduce((result, item)=>{
        const courses = item.courses.reduce((result, item)=>{
            return item.students + result 
        }, 0)
    return courses + result
    }, 0)
    const courseslength = academy.reduce((result, item)=>{
        return result + item.courses.length
    }, 0)





    const Totalitems = shop.reduce((result, item)=>{
        return item.quantity + result
    }, 0)

    const Totalinventoryvalue = shop.reduce((result, item)=>{
        return result + item.price * item.quantity
    }, 0)

    const Mostexpensiveproduct = shop.reduce((result, item)=>{
        return item.price > result.price ? item : result
    }, shop[0])

    const Cheapestproduct = shop.reduce((result, item)=>{
        return item.price < result.price ? item : result
    }, shop[0])
    
    const Sortpricehightolow = [...shop].sort((a, b) => a.price - b.price)





    

    const Totalsolvedtickets = support.reduce((result, item)=>{
        return item.solved + result
    }, 0)

    const Totalopentickets = support.reduce((result, item)=>{
        return item.open + result
    }, 0)

    const Hardestworker = support.reduce((result, item)=>{
        return item.solved > result.solved ? item : result
    }, support[0])

    const EveryonesolvedatleastFive = support.every((support)=>{
        return support.solved >= 5
    })

    const Anyonehasmorethan20solved = support.some((support)=>{
        return support.solved >= 20
    })



    const generatedAt = new Date(2026, 8, 3);
    return {
        steam: {
            Totalplayers: players.length,
            Premiumplayers,
            Highestlevelplayer,
            Totalhoursplayed,
            Averagelevel: Averagelevel / players.length,
            Doesanyonehavemorethan600hours,
            FindEmma,
            Allgameuniquetitles,
            Uniquegenres,
            Freegametitles,
            uniqueFreegametitles,
            Misc
        },
        academy: {
            Instructornames,
            Totalcourses,
            Totalstudents,
            Biggestcourse,
            Averagestudentspercourse: Averagestudentspercourse / courseslength
        },
        shop: {
            Totalitems,
            Totalinventoryvalue,
            Mostexpensiveproduct,
            Cheapestproduct,
            Sortpricehightolow
        },
        support: {
            Totalsolvedtickets,
            Totalopentickets,
            Hardestworker: Hardestworker.username,
            EveryonesolvedatleastFive,
            Anyonehasmorethan20solved
        },
        generatedAt: `${generatedAt.getMonth()} / ${generatedAt.getDate()} / ${generatedAt.getFullYear()}`
    }
}


console.log(generateDashboard(database))
