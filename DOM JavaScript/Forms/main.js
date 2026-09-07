const loginForm = document.querySelector("#loginForm")
const username = document.querySelector("#Loginusername")
const message = document.querySelector("#message")

loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    message.textContent = `Welcome ${username.value}! 👋`
})


const playerForm = document.querySelector("#playerForm")
const playerusername = document.querySelector("#username")
const level = document.querySelector("#level")
const stats = document.querySelector("#playerResult")

playerForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    const username = document.createElement("h3")
    const userlevel = document.createElement("p")

    username.textContent = playerusername.value
    userlevel.textContent = level.value

    stats.appendChild(username)
    stats.appendChild(userlevel)
})
