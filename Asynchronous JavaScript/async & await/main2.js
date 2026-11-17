function findMatch() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Match found!")
        }, 2000);
    })
}

function connectToServer() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Connected to server!")
        }, 1000);
    })
}

function loadPlayerProfile() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Player profile loaded!")
        }, 3000);
    })
}

async function startGame() {
    console.log("Starting CS2...")
    const find = await findMatch()
    console.log(find)
    const connect = await connectToServer()
    console.log(connect)
    const load = await loadPlayerProfile()
    console.log(load)
    console.log("Everything is ready. Let's play!")
}

startGame()
