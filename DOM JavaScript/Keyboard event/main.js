const keyDisplay = document.querySelector("#keyDisplay")

document.addEventListener("keydown", (event) => {
    keyDisplay.textContent = `You pressed: ${event.key}`
})

const username = document.querySelector("#username")
const message = document.querySelector("#message")
username.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        message.textContent = `Welcome ${username.value}! 👋`
    }
})


const player = document.querySelector("#player")
const playerWarn = document.querySelector("#playerWarn")
document.addEventListener("keydown", (event)=>{
    if (event.key === "ArrowUp") {
        playerWarn.textContent = "Moving Up ⬆️"

    } else if(event.key === "ArrowDown"){
        playerWarn.textContent = "Moving Down ⬇️"

    } else if(event.key === "ArrowLeft"){
        playerWarn.textContent = "Moving Left ⬅️"

    } else if(event.key === "ArrowRight") {
        playerWarn.textContent = "Moving Right ➡️"
    }
})
