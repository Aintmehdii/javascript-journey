const gameusername = document.querySelector("#gameusername")
const gamestatus = document.querySelector("#gamestatus")
const gamescore = document.querySelector("#gamescore")

let score = 0
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (gameusername.value) {
            gamestatus.textContent = "Logged in status: 🟢 Online"
        }else {
            gamestatus.textContent = "❌ Enter a username"
        }
    } else if (event.key === "ArrowUp") {
        gamescore.textContent = `Score: ${score += 10}`
    } else if (event.key === "ArrowDown") {
        score = Math.max(0, score - 0)
        gamescore.textContent = `Score: ${score -= 5}`
    } else if (event.key === "Escape") {
        gamestatus.textContent = "Logged out status: 🔴 Offline"
    }

})



const score = document.querySelector("#score")
let currentScore = 0

document.addEventListener("keydown", (event)=>{
        if (event.key === "ArrowUp"){
            score.textContent = `score: ${currentScore += 5}`
        }else if (event.key === "ArrowDown"){
            score.textContent = `score: ${currentScore -= 5}`
        }
})



const player = document.querySelector("#player")
const status = document.querySelector("#status")
document.addEventListener("keydown", (event)=>{
    if (event.key === "ArrowUp") {
        status.textContent = "Player moved up ⬆️"
    }else if (event.key === "ArrowDown"){
        status.textContent = "Player moved down ⬇️"
    }else if (event.key === "ArrowLeft"){
        status.textContent = "Player moved left ⬅️"
    }else if (event.key === "ArrowRight"){
        status.textContent = "Player moved right ➡️"
    }else{
        status.textContent = `Unknown key: ${event.key}`
    }
})



const username = document.querySelector("#username")
const message = document.querySelector("#message")
document.addEventListener("keydown", (event)=>{
    
    if (event.key === "Enter") {
        if (username.value) {
            message.textContent = `Welcome, ${username.value}! 👋`
        }else {
            message.textContent = "Please enter a username"
        }
    }
})






