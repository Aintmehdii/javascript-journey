function loadPlayer() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve(["Mahdi", "Alex", "John", "David"])
        }, 2000);
    })
}

function startTournament() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Tournament started!")
        }, 3000);
    })
}

function getWinner() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Mahdi won the tournament!")
        }, 2000);
    })
}

async function runTournament() {
    console.log("Preparing tournament...")
    const load = await loadPlayer()
    console.log(`Players: ${load}`)
    const start = await startTournament()
    console.log(start)
    const winner = await getWinner()
    console.log(winner)
    console.log("Tournament finished!")
}

runTournament()
