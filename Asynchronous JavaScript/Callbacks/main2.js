function greet(username, callback) {
    console.log(`Hello ${username}`)
    callback()
}
greet('Mahdi', () => {
    console.log('Welcome to the game!')
})



function addLevel(level, callback) {
    callback(level += 10)
}
addLevel(55, (newLevel) => {
    console.log(`New level: ${newLevel}`)
})



function createPlayer(username, level, callback) {
    Player = {
        username: username,
        level: level
    }

    callback(Player)
}
createPlayer('Mahdi', 55, (Player)=>{
    console.log(`${Player.username} | level: ${Player.level}`)



function processPlayer(username, callback) {
    Player = {
        username: username,
        level: 1
    }
    callback(Player)
}
processPlayer('Mahdi', (Player)=>{
    console.log(`Welcome ${Player.username}`)
})
processPlayer('Mahdi', (Player)=>{
    console.log(`Loading level ${Player.level}`)
})




function getPlayer(username, level, callback) {
    Player = {
        username: username,
        level: level
    }
    callback(Player)
}
function showPlayer(Player) {
    console.log(`${Player.username} | ${Player.level}`)
}

getPlayer('Mahdi', 55, showPlayer)




    function login(username, callback) {
    const player = {
        username: username,
        loggedIn: true
    }

    setTimeout(() => {
        callback(player)
    }, 2000);
}


function getPlayerData(username, callback) {
    const player = {
        username: username,
        level: 55,
        premium: true
    }

    setTimeout(() => {
        callback(player)
    }, 2000);
}


function showDashboard(player) {
    setTimeout(() => {
        console.log(`Welcome ${player.username}`);
        console.log(`Level: ${player.level}`);
        console.log(`Premium: ${player.premium}`);
    }, 2000);
}


login("Mahdi", (user) => {

    console.log(user.username);

    getPlayerData(user.username, (player) => {

        console.log(player.level);

        showDashboard(player);

    });

});
