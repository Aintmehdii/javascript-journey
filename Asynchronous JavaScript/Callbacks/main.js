function greetUser(username, callback) {
    console.log(`Welcome ${username}`)
    callback()
}
greetUser('Mahdi', () =>{
    console.log('Open Dashboard')
})



function calculateLevel(level, callback) {
    callback(level + 10)
}

calculateLevel(55, (newLevel) => {
    console.log(`New level: ${newLevel}`);
});



function loginPlayer(username, callback) {
    const player = {
        username: username,
        loggedIn: true
    };
    callback(player);
}

loginPlayer("Mahdi", (player) => {
    console.log(`${player.username} logged in: ${player.loggedIn}`);
});



function processPlayer(username, callback) {
    const player = {
        username: username,
        level: 10
    };

    callback(player);
}
processPlayer("Jack", (result) => {
    console.log(`Welcome ${result.username}`);
});
