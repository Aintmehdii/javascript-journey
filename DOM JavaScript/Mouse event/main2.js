const position = document.querySelector("#position")
document.addEventListener("mousemove", (event)=>{
    position.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})


const tracker = document.querySelector("#tracker")
const trackerStatus = document.querySelector("#trackerStatus")
tracker.addEventListener("mousemove", (event)=>{
    trackerStatus.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})



const gameBox = document.querySelector("#gameBox")
const gameStatus = document.querySelector("#gameStatus")
const startBtn = document.querySelector("#startBtn")
gameBox.addEventListener("mouseenter", ()=>{
    gameStatus.textContent = "🎮 Ready to play!"
})
gameBox.addEventListener("mouseleave", ()=>{
    gameStatus.textContent = "👋 Come back!"
})
startBtn.addEventListener("click", ()=>{
    gameStatus.textContent = "🔥 Game started"
})
gameBox.addEventListener("mousemove", (event)=>{
    gameStatus.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})



// ============================================================== // 



const game = document.querySelector("#game")
const player = document.createElement("div")
const status = document.createElement("p")

player.textContent = "🎮 Player"
status.textContent = "waiting..."
game.appendChild(player)
game.appendChild(status)

player.addEventListener("mouseenter", ()=>{
    status.textContent = "🟢 Player selected!"
})
player.addEventListener("mouseleave", ()=>{
    status.textContent = "🔴 Player deselected!"
})

document.addEventListener("keydown", (event)=>{
    if (event.key === "ArrowUp") {
        status.textContent = "Player moved ⬆️"
    } else if(event.key === "ArrowDown"){
        status.textContent = "Player moved ⬇️"
    } else if(event.key === "ArrowLeft"){
        status.textContent = "Player moved ⬅️"
    } else if(event.key === "ArrowRight"){
        status.textContent = "Player moved ➡️"
    }
})

player.addEventListener("click", ()=>{
    status.textContent = "🔥 Player clicked!"
})

