const form = document.querySelector("#registerForm")
const username = document.querySelector("#registerUsername")
const level = document.querySelector("#registerLevel")
const message = document.querySelector("#registerMessage")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const playerLevel = Number(level.value)
    if (username.value.length >= 3 && playerLevel >= 1 && playerLevel <= 100) {
        message.textContent = `${username.value} | level: ${level.value}`
    }else {
        message.textContent = "Details are invalid!"
    }
})
