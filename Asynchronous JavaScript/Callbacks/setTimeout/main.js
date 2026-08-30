=function welcome(username, callback) {
    console.log(`Loading ${username}...`)
    setTimeout(()=>{callback()}, 2000);
}
welcome('Jack', ()=>{
    console.log('Welcome to your account!')
})



function caculateLevel(level, callback) {
    setTimeout(()=>{callback(level + 10)}, 4000)
}
caculateLevel(55, (newlevel)=>{
    console.log(`Level: ${newlevel}`)
})



function getPlayer(username, callback) {
    player = {
        username: username,
        level: 1,
        rank: 'Bronze'
    }
    setTimeout(()=>{callback(player)}, 6000)
}
getPlayer('Jack', (player)=>{
    console.log(`${player.username} | ${player.level} | ${player.rank}`)
})



function login(username, callback) {
    user = {
        username: username,
        loggedIn: true
    }
    setTimeout(()=>{callback(user)}, 8000)
}
login('Mahdi', (player)=>{
    console.log(`${player.username} logged in`)
    setTimeout(()=>{console.log('Loading dashboard...')}, 2000)
})


