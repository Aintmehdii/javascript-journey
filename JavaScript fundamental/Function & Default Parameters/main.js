// Function and Default Parameters //
function greet(name){
    console.log(`Hello ${name}`)
}
greet('Mahdi');




function indroduce(name, age){
    console.log(`${name} is ${age} years old`);
}
indroduce('Mahdi', 20)



function sum(a, b){
    return a + b
}
console.log(sum(10, 20))




function createplayer(username, level){
    return {
        username: username,
        level: level
    }
}
console.log(createplayer('Mahdi', 55));





function welcome(name = 'Guest'){
    console.log(`Welcome ${name}`)
}
welcome()
welcome('Mahdi')





function buygame(title = 'CS2', price = 0){
    console.log(`${title} - ${price}`)
}
buygame()
buygame(`Elden Ring`, `$${60}`)





function createsteamuser(username = 'Guest', premium = false, hours = 0){
    return {
        username: username,
        premium: premium,
        hours: hours
    }
}
console.log(createsteamuser());
console.log(createsteamuser('Mahdi', true, 450));
console.log(createsteamuser('Jack', undefined, undefined));











const players = [
    {
        username: "Mahdi",
        premium: true,
        level: 55,
        hours: 450,
        games: [
            { title: "CS2", price: 0 },
            { title: "Elden Ring", price: 60 }
        ]
    },
    {
        username: "Jack",
        premium: false,
        level: 18,
        hours: 120,
        games: [
            { title: "Minecraft", price: 30 }
        ]
    },
    {
        username: "Emma",
        premium: true,
        level: 80,
        hours: 620,
        games: [
            { title: "Valorant", price: 0 },
            { title: "Cyberpunk", price: 50 },
            { title: "RDR2", price: 60 }
        ]
    }
];
function showPlayer(players = []) {
    const premiumplayer = players.map(({username, premium, level})=>{
        premium
        ? console.log(`${username} | Level ${level} ⭐`)
        : console.log(`${username} | Level ${level}`)
    })
return premiumplayer
}       
showPlayer(players)



function getPremiumUsers(players = []){
    const playersdetails = players.filter((user)=>{
        return user.premium
    }).map((Premiumuser)=>{
        return Premiumuser.username
    })
    return playersdetails
}
console.log(getPremiumUsers(players))



function totalHours(players = []) {
    const totalusersHours = players.reduce((result, item)=>{
        return result + item.hours
    }, 0)
return totalusersHours
}
console.log(totalHours(players))



function highestLevelPlayer(players = []) {
    const highestLevel = players.reduce((result, item)=>{
        if (item.hours > result) {
            return result
        } else {
            return item
        }
    }, players.hours)
return highestLevel
}
console.log(highestLevelPlayer(players))




function hasFreeGames(players = []) {
    const playersdetail = players.some((playersdetail)=>{
        const playergames = playersdetail.games.some((playergame)=>{
            return playergame.price === 0
        })
        return playergames
    })
return playersdetail
}
console.log(hasFreeGames(players))



function allGameTitles(players = []) {
    const allplayerdetails = players.reduce((result, item)=>{
        const titles = item.games.map((title)=>{
            return title.title
        })
    return [...result, ...titles]
    }, [])
return allplayerdetails
}
console.log(allGameTitles(players))



