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

