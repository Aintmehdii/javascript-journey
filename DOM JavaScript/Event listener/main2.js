const app = document.querySelector("#app")
const button = document.createElement("button")
button.textContent = "Login"
app.appendChild(button)

button.addEventListener("click", ()=>{
    button.textContent = "Logged In ✅"
})


const players = document.querySelector("#players")
const userInterface = document.createElement("div")
const usernameH2 = document.createElement("h2")
const levelP = document.createElement("p")
const levelUpBtn = document.createElement("button")

userInterface.appendChild(usernameH2)
userInterface.appendChild(levelP)
userInterface.appendChild(levelUpBtn)
players.appendChild(userInterface)

let level = 55
usernameH2.textContent = "Mahdi"
levelP.textContent = `level: ${level}`
levelUpBtn.textContent = "Level Up"

levelUpBtn.addEventListener("click", ()=>{
    level += 1
    levelP.textContent = `level: ${level}`
})
