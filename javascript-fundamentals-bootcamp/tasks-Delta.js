// Task 1 - Premium Steam Report ⭐ //
const players = [
    {
        username: "Mahdi",
        premium: true,
        hours: 450,
        level: 48,
        games: [
            { title: "CS2", hours: 350, price: 0},
            { title: "Elden Ring", hours: 100, price: 15}
        ]
    },
    {
        username: "Jack",
        premium: false,
        hours: 120,
        level: 22,
        games: [
            { title: "Minecraft", hours: 120, price: 20}
        ]
    },
    {
        username: "Emma",
        premium: true,
        hours: 600,
        level: 69,
        games: [
            { title: "Valorant", hours: 250, price: 0},
            { title: "Cyberpunk", hours: 350, price: 50}
        ]
    }
];
function showPremiumPlayers(players) {
    const premiumusers = players.filter((user)=>{
        return user.premium
    }).map((username)=>{
        return (`${username.username} ⭐ (${username.hours}h)`)
    })
return premiumusers
}
console.log(showPremiumPlayers(players))




// Task 2 — Shopping Cart Summary //
const cart = [
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Keyboard", price: 120, quantity: 1 },
    { name: "Monitor", price: 500, quantity: 2 }
];

function Shopdetails(cart = []) {
    const totalItems = cart.reduce((result, item)=>{
       return result + item.quantity
    }, 0)


    const totalPrice = cart.reduce((result, item)=>{
        return result + item.price * item.quantity
    }, 0)


    const mostExpensiveItem = cart.reduce((result, item)=>{
        if (result.price > item.price) {
            return result
        } return item
    }, cart[0]) 

return {
totalItems,
totalPrice,
mostExpensiveItem
}}
console.log(Shopdetails(cart))






// Task 3 — Academy Statistics //
const academy = [
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
            { title: "JavaScript", students: 30 },
            { title: "React", students: 25 }
        ]
    }
];
function academydetails(academy) {
    const totalCourses = academy.reduce((result, item)=>{
       return item.courses.length + result
    }, 0)

    const instructors = academy.reduce((result, item)=>{
        return academy.length
    }, 0)

    const totalStudents = academy.reduce((result, item)=>{
        const studentdetails = item.courses.reduce((result, item)=>{
            return item.students + result
        }, 0)
    return studentdetails + result 
    }, 0)

return {
    totalCourses,
    instructors,
    totalStudents
}
}
console.log(academydetails(academy))







// Task 4 — Netflix Analyzer //
const Netflix = [
    {
        username: 'Matthew',
        premium: true,
            shows: [
                {
                    showname: 'Batman',
                    eposides: 70
                },
                {
                    showname: 'The Last Of Us',
                    eposides: 25
                },
                {
                    showname: 'friends',
                    eposides: 210
                }
            ]
    },
    {
        username: 'Martinez',
        premium: false,
            shows: [
                {
                    showname: 'Kingdom of dragons',
                    eposides: 240
                }
            ]
    },
    {
        username: undefined,
        premium: true,
            shows: [
                {
                    showname: 'Little ladies',
                    eposides: 230
                }
            ]
    }
]
function Netflixdetails(Netflix) {
    const premiumusers = Netflix.filter((user)=>{
        return user.premium
    }).map((user)=>{
        return user.username ?? 'Guest'
    })

    const totalShows = Netflix.reduce((result, item)=>{
        return item.shows.length + result
    }, 0)


    
    const longestShow = Netflix.reduce((result, item)=>{

        const showsdetails = item.shows.reduce((result, item)=>{
            if (item.eposides > result.eposides) {
                return item
            } return result
        }, item.shows[0])
    return showsdetails.eposides > result.eposides ? showsdetails : result
    }, Netflix[0].shows[0])


    const hasShowOver100Episodes = Netflix.some((Netflixdetails)=>{
        const showsdetails = Netflixdetails.shows.some((show)=>{
            return show.eposides >= 100
        })
    return showsdetails
    })
return {premiumusers, totalShows, longestShow, hasShowOver100Episodes}
}
console.log(Netflixdetails(Netflix))





// Task 5 — Sort Leaderboard //
const CSGOplayers = [
    {
        username: 'BigElephant',
        level: 44,
        hourse: 105,
            playerdetails: [
                {
                    kills: 1008,
                    assistant: 205
                }
            ]
    },
    {
        username: 'PanziarFiar',
        level: 94,
        hourse: 571,
            playerdetails: [
                {
                    kills: 3055,
                    assistant: 485
                }
            ]
    },
    {
        username: 'Kiddo',
        level: 10,
        hourse: 40,
            playerdetails: [
                {
                    kills: 155,
                    assistant: 40
                }
            ]
    }
]
function CSGO(CSGOplayers) {
    const CSGOdetails = CSGOplayers.map((detail)=>{
        return detail.level
    }).sort((a, b) => b - a)
    return `Highest level is: ${CSGOdetails[0]}`
}
console.log(CSGO(CSGOplayers))







// Task 6 — User Card Generator //
function createUserCard(players) {
    const playerdetails = players.map(({username, premium, hours, country})=>{
        return {
            username, premium, hours, country: country ?? "Unvalid"
        }
    })
return playerdetails
}
console.log(createUserCard(players))








// Task 7 — Free Games Finder //
function freegamefinder(players) {
    const playergamesdetails = players.map((gamesdetails)=>{
        const gamesdetail = gamesdetails.games.filter((game)=>{
            return game.price === 0
        }).map((game)=>{
            console.log(game.title)
    })
        })
}
freegamefinder(players)








// Task 8 — Gaming Dashboard //
function GamingDashboard(players) {

    const premiumPlayers = players.filter((premiumPlayer)=>{
        return premiumPlayer.premium
    }).map((premiumPlayer)=>{
        return premiumPlayer.username
    })

    const averageHours = players.reduce((result, item)=>{
        return item.hours + result
    }, 0)

    const highestLevel = players.reduce((result, item)=>{
        if (item.level < result.level) {
            return result
        } return item
    }, players[0])

    const totalGames = players.reduce((result, item)=>{
        return item.games.length + result
    }, 0)

    const totalHoursPlayed = players.reduce((result, item)=>{
        return item.hours + result
    }, 0)

return {
    averageHours: averageHours / players.length,
    highestLevel: highestLevel.username,
    totalGames,
    totalHoursPlayed,
    premiumPlayers
}
}
console.log(GamingDashboard(players))

