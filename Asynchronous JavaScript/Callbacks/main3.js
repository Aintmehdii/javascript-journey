function joinServer(username, callback) {
    console.log(`${username} is joining the server...`)

    callback(username)
}

function showWelcome(username) {
    console.log(`Welcome ${username}, Your server is ready.`)
}

joinServer("Mahdi", showWelcome)






function completeMission(name, amount, callback) {
    console.log(`Mission ${name} completed!`)

    callback(amount)
}

function giveReward(amount) {
    console.log(`You received ${amount} XP!`)
}

completeMission("warzone", 500, giveReward)
